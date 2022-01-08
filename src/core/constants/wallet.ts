import type { AbstractConnector } from '@web3-react/abstract-connector'
import { injected, walletconnect } from '@/src/core/connectors'

export interface WalletMetaData {
  connector?: AbstractConnector
  name: string
  iconSrc: string
  description: string
  hidden?: boolean
}

export const SUPPORTED_WALLETS: { [key: string]: WalletMetaData } = {
  // INJECTED: {
  //   connector: injected,
  //   name: 'Injected',
  //   iconSrc: '/img/wallet/injected.svg',
  //   description: 'Injected web3 provider.',
  //   hidden: true,
  // },
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    iconSrc: '/img/wallet/metamask.svg',
    description: 'Easy-to-use browser extension.',
  },
  WALLET_CONNECT: {
    connector: walletconnect,
    name: 'WalletConnect',
    iconSrc: '/img/wallet/wallet-connect.svg',
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
  },
}

export const SAVED_WALLET_KEY = 'cwllet'
