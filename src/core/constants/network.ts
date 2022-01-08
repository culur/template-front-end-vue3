/**
 * Supported network Enum
 */
export enum SupportedChainID {
  MAINNET = 1,
  // ROPSTEN = 3,
  RINKEBY = 4,
  // GOERLI = 5,
  // KOVAN = 42,
}

/**
 * List of all the supported network ids
 */
export const LIST_SUPPORTED_CHAIN_ID: SupportedChainID[] = Object.values(SupportedChainID).filter(
  chain => typeof chain === 'number',
) as SupportedChainID[]

const INFURA_KEY = import.meta.env.VITE_APP_INFURA_KEY

/**
 * These are the network URLs used by the interface when there is not another available source of chain data
 */
export const INFURA_NETWORK_URLS: { [key in SupportedChainID]: string } = {
  [SupportedChainID.MAINNET]: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
  [SupportedChainID.RINKEBY]: `https://rinkeby.infura.io/v3/${INFURA_KEY}`,
  // [SupportedChainID.ROPSTEN]: `https://ropsten.infura.io/v3/${INFURA_KEY}`,
  // [SupportedChainID.GOERLI]: `https://goerli.infura.io/v3/${INFURA_KEY}`,
  // [SupportedChainID.KOVAN]: `https://kovan.infura.io/v3/${INFURA_KEY}`,
}

// fallback to rinkeby if not set
export const DEFAULT_NETWORK = SupportedChainID.RINKEBY
