import { SupportedChainID } from './network'

export const AIRDROP_CONTRACT: { [key in SupportedChainID]: string } = {
  [SupportedChainID.MAINNET]: '',
  [SupportedChainID.RINKEBY]: '0xAc60e4ab366728e84D6cfa42e76A6E879609DBba',
}

export const SEED_NFT_CONTRACT: { [key in SupportedChainID]: string } = {
  [SupportedChainID.MAINNET]: '',
  [SupportedChainID.RINKEBY]: '0x3e4391182520effdf0fb00ed438e51e07e2785c2',
}

export const TREASURY_CONTRACT: { [key in SupportedChainID]: string } = {
  [SupportedChainID.MAINNET]: '',
  [SupportedChainID.RINKEBY]: '0x35C44E9De7122A904e2e0c8DF607a12d3cEb089E',
}
