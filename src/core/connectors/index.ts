import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { INFURA_NETWORK_URLS, LIST_SUPPORTED_CHAIN_ID } from '@/src/core/constants/network'

export const injected = new InjectedConnector({
  supportedChainIds: LIST_SUPPORTED_CHAIN_ID,
})

export const walletconnect = new WalletConnectConnector({
  supportedChainIds: LIST_SUPPORTED_CHAIN_ID,
  rpc: INFURA_NETWORK_URLS,
  qrcode: true,
})
