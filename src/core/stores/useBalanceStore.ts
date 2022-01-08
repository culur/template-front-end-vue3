import type { BigNumber } from 'ethers'
import { constants } from 'ethers'
import { acceptHMRUpdate, defineStore } from 'pinia'
import type { SupportedChainID } from '~/core/constants/network'
import type { TokenInfo } from '~/core/constants/token'
import tokens from '~/core/constants/token'
import { getEthLibraryInstance } from '~/core/hooks/useWeb3Library'
import { ERC20__factory } from '~/core/services/contract/erc20'
import type { Split } from '~/core/typings/string.type'

export interface TokenBalance extends TokenInfo {
  balance: BigNumber
}

export type TokenBalanceKey = `${SupportedChainID}__${string}`
export type FetchBalanceConfig = Omit<TokenBalance, 'balance'> & { chain: SupportedChainID }

const toId = ({ chain, address }: { chain: SupportedChainID; address: string }): TokenBalanceKey =>
  `${chain}__${address}`

const initBalanceMap = (): Map<TokenBalanceKey, TokenBalance> => {
  const balanceMap = new Map<TokenBalanceKey, TokenBalance>()
  const entries = Object.entries(tokens) as unknown as [SupportedChainID, TokenInfo[]][]

  entries.forEach(([chain, tokens]) => {
    tokens.forEach((token) => {
      const data: TokenBalance = {
        ...token,
        // ? balance = -1 on init will be easier for fallback rendering
        balance: constants.NegativeOne,
      }
      balanceMap.set(toId({ address: token.address.toLowerCase(), chain }), data)
    })
  })
  return balanceMap
}

export const useBalanceStore = defineStore('balance', () => {
  const balanceMap = shallowReactive<Map<TokenBalanceKey, TokenBalance>>(initBalanceMap())

  const flattedBalanceMap = computed(() =>
    Array.from(balanceMap.entries()).reduce((acc, [key, value]) => {
      const [chain, address] = key.split('__') as Split<TokenBalanceKey, '__'>
      if (!acc[chain]) acc[chain] = {}
      acc[chain][address] = value
      return acc
    }, {} as Record<SupportedChainID, Record<string, TokenBalance>>),
  )

  function setBalance({ key, data }: { key: TokenBalanceKey; data: TokenBalance }) {
    balanceMap.set(key, data)
  }

  // Fetch balance of single token
  function fetchBalance(targetToken: FetchBalanceConfig) {
    const { chain, ...tokenInfo } = targetToken
    const { address } = tokenInfo
    const provider = getEthLibraryInstance(chain)
    if (!provider) {
      console.error('[BalanceStore]: provider is not ready')
      return
    }
    const signer = provider.getSigner()
    if (address === constants.AddressZero) {
      signer
        .getBalance()
        .then((balance) => {
          setBalance({
            key: toId({ address: address.toLowerCase(), chain }),
            data: { ...tokenInfo, balance },
          })
        })
        .catch((e: Error) => {
          console.error('[BalanceStore]: getBalance error', e)
        })
    }
    else {
      const contract = ERC20__factory.connect(address, signer)
      signer
        .getAddress()
        .then((userAddress) => {
          contract
            .balanceOf(userAddress)
            .then((balance) => {
              setBalance({
                key: toId({ address: address.toLowerCase(), chain }),
                data: { ...tokenInfo, balance },
              })
            })
            .catch((e: Error) => {
              console.error('[BalanceStore]: getBalance error', e)
            })
        })
        .catch((e: Error) => {
          console.error('[BalanceStore]: getBalance error', e)
        })
    }
  }

  // Fetch all balances from config
  function fetchBalances({
    chain,
    includeZeroAddress,
  }: {
    chain: SupportedChainID
    includeZeroAddress?: boolean
  }) {
    const chainTokens = Object.values(tokens[chain])
    const listToken = includeZeroAddress
      ? chainTokens
      : chainTokens.filter(token => token.address !== constants.AddressZero)
    listToken.forEach((token) => {
      fetchBalance({ chain, ...token })
    })
  }

  function resetBalances() {
    // !FIXME: clean up duplicate logic later
    const entries = Object.entries(tokens) as unknown as [SupportedChainID, TokenInfo[]][]
    entries.forEach(([chain, tokens]) => {
      tokens.forEach((token) => {
        const data: TokenBalance = {
          ...token,
          // ? balance = -1 on init will be easier for fallback rendering
          balance: constants.NegativeOne,
        }
        balanceMap.set(toId({ address: token.address.toLowerCase(), chain }), data)
      })
    })
  }

  return { balanceMap, flattedBalanceMap, setBalance, fetchBalance, fetchBalances, resetBalances }
})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useBalanceStore, import.meta.hot))
