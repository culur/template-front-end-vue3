import { constants } from 'ethers'
import { SupportedChainID } from './network'

export interface TokenInfo {
  name: string
  symbol: string
  decimals: number
  address: string
}

// ? ETH MAINNET
export const ethTokens: TokenInfo[] = [
  {
    name: 'Ethereum',
    symbol: 'ETH',
    decimals: 18,
    address: constants.AddressZero,
  },
]

// ? ETH RINKEBY TESTNET
export const rinkebyTokens: TokenInfo[] = [
  {
    name: 'Ethereum',
    symbol: 'ETH',
    decimals: 18,
    address: constants.AddressZero,
  },
  // Test ERC20 token, remove later
  // https://rinkeby.etherscan.io/token/0x7e7A914d1e53cBC6c2bF8efFf41ACBba00AeBA02
  {
    name: 'UWU',
    symbol: 'UWU',
    decimals: 18,
    address: '0x7e7A914d1e53cBC6c2bF8efFf41ACBba00AeBA02',
  },
]

const tokens: Record<SupportedChainID, TokenInfo[]> = {
  [SupportedChainID.MAINNET]: ethTokens,
  [SupportedChainID.RINKEBY]: rinkebyTokens,
}

export default tokens
