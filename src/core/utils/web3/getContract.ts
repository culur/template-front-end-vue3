import type { Provider } from '@ethersproject/providers'
import type { MaybeRef } from '@vueuse/core'
import type { Signer } from 'ethers'
import type { SupportedChainID } from '../../constants/network'
import { DEFAULT_NETWORK } from '../../constants/network'
import { getEthLibraryInstance } from '../../hooks/useWeb3Library'

interface MockFactory<C> {
  connect(address: string, signerOrProvider: Signer | Provider): C
}

export default function getContract<C>(
  factory: MockFactory<C>,
  address: MaybeRef<string>,
  networkId: MaybeRef<SupportedChainID> = DEFAULT_NETWORK,
) {
  const provider = getEthLibraryInstance(networkId)
  const signer = unref(provider).getSigner()
  const contract = factory.connect(unref(address), unref(signer))
  return {
    contract,
    provider,
    signer,
  }
}
