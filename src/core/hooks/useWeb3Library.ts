import type { Web3Provider } from '@ethersproject/providers'
import { JsonRpcProvider } from '@ethersproject/providers'
import type { MaybeRef } from '@vueuse/core'
import { useWeb3Instance } from './useWeb3'
import type { SupportedChainID } from '~/core/constants/network'
import { INFURA_NETWORK_URLS } from '~/core/constants/network'

// ! Vue reactivity wrapper will break the Web3Provider instance, so cannot wrap it inside computed
// * Possible solution, can use markRaw to wrap the Web3Provider instance, so it won't be reactive
// A little shady type, but we are not sure which type of library we are using for other Network yet
const libraryMap = new Map<number, any>()

const NETWORK_URL = {
  ...INFURA_NETWORK_URLS,
}

export const useWeb3Library = (networkId: number, getLibrary: any) => {
  const { state } = useWeb3Instance(networkId)

  const jsonRpcProvider = computed(
    () => new JsonRpcProvider(NETWORK_URL[(state.value.chainId || networkId) as SupportedChainID]),
  )

  const stopWatchWeb3Instance = watch(
    state,
    () => {
      // console.debug('useWeb3Library', state.value.provider)
      if (state.value.provider)
        libraryMap.set(state.value.chainId || networkId, getLibrary(state.value.provider))
        // console.debug('Has provider', libraryMap.get(state.value.chainId || networkId))

      else
        libraryMap.set(state.value.chainId || networkId, jsonRpcProvider.value)
    },
    { immediate: true },
  )

  onScopeDispose(stopWatchWeb3Instance)

  // Return stopWatchWeb3Instance for manual disposal
  return stopWatchWeb3Instance
}

// ? We are not sure which type of library we are using for network yet
// ! Vue reactivity wrapper will break the Web3Provider instance, so cannot wrap it inside computed
// * Possible solution, can use markRaw to wrap the Web3Provider instance, so it won't be reactive
export const getWeb3LibraryInstance = <T = any>(networkId: MaybeRef<number>) =>
  libraryMap.get(unref(networkId)) as T

// Cast to Web3Provider for use in Ethereum base network
export const getEthLibraryInstance = (networkId: MaybeRef<number>) =>
  getWeb3LibraryInstance<Web3Provider>(networkId)
