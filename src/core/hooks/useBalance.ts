import { constants } from 'ethers'
import { get, toRefs } from '@vueuse/core'
import { partition } from 'lodash-es'
import { storeToRefs } from 'pinia'
import type { SupportedChainID } from '../constants/network'
import { DEFAULT_NETWORK } from '../constants/network'
import { ERC20__factory } from '../services/contract/erc20'
import tokens from '../constants/token'
import { useWeb3Instance } from './useWeb3'
import { getEthLibraryInstance } from './useWeb3Library'
import { useBalanceStore } from '~/core/stores/useBalanceStore'
import type { FetchBalanceConfig } from '~/core/stores/useBalanceStore'

const useBalance = () => {
  const store = useBalanceStore()

  const subscribeBalance = (chain: SupportedChainID) => {
    const [zero, erc20] = partition(tokens[chain], { address: constants.AddressZero })
    const lib = getEthLibraryInstance(chain)
    if (!lib) {
      console.error('[BalanceHook]: provider is not ready')
    }
    else {
      // Pooling fetch balance of zero token every single block
      const zeroToken = zero[0]
      const zeroTokenConfig: FetchBalanceConfig = {
        chain,
        ...zeroToken,
      }
      lib.on('block', () => {
        store.fetchBalance(zeroTokenConfig)
      })
      const signer = lib.getSigner()
      signer
        .getAddress()
        .then((address) => {
          // Fetch balance of erc20 token on transfer event
          erc20.forEach((token) => {
            const contract = ERC20__factory.connect(token.address, signer)
            const filterFrom = contract.filters.Transfer(address)
            const filterTo = contract.filters.Transfer(null, address)

            // Listen to incoming events from user wallet:
            contract.on(filterFrom, (from, to, amount, event) => {
              // The `from` will always be the user address
              console.debug('[BalanceHook]: Transfer out event', { from, to, amount, event })
              store.fetchBalance({ chain, ...token })
            })

            // Listen to incoming events to user wallet:
            contract.on(filterTo, (from, to, amount, event) => {
              // The `to` will always be the user address
              console.debug('[BalanceHook]: Transfer in event', { from, to, amount, event })
              store.fetchBalance({ chain, ...token })
            })
          })
        })
        .catch((e) => {
          console.error('[BalanceHook]: getAddress error', e)
        })
    }
  }

  ;[DEFAULT_NETWORK].forEach(
    (chain) => {
      const { state } = useWeb3Instance(chain)
      watch(state, () => {
        const { provider } = toRefs(state)
        if (provider && provider.value) {
          store.fetchBalances({
            chain,
            includeZeroAddress: true,
          })
          subscribeBalance(chain)
        }
        else {
          store.resetBalances()
        }
      })
    },
    { immediate: true },
  )
}

export const useBalanceInstance = (chain: SupportedChainID = DEFAULT_NETWORK) => {
  const store = useBalanceStore()
  const { flattedBalanceMap } = storeToRefs(store)
  const balances = computed(() => {
    const balanceMap = get(flattedBalanceMap)[chain as typeof DEFAULT_NETWORK]
    return balanceMap
  })

  const getBalance = (address: string) => {
    return computed(() => get(balances)[address])
  }

  return { balances, getBalance }
}

export default useBalance
