export const TOKEN_TOTAL_SUPPLY = 100_000_000

export const TOKENOMY_SERIES = [
  50, // Play to Earn
  10, // Team
  10, // Community/Ecosystem
  8, // Public Sale
  5.2, // Liquidity
  5, // Staking Rewards
  5, // Advisor
  3.8, // Marketing
  2, // Private Sale
  1, // Airdrop
]

export const TOKENOMY_LABEL = [
  'play_to_earn',
  'team',
  'community_ecosystem',
  'public_sale',
  'liquidity',
  'staking_reward',
  'advisor',
  'marketing',
  'private_sale',
  'airdrop',
] as const

export type TokenomyLabel = typeof TOKENOMY_LABEL[number]

export const TOKENOMY_LABEL_POSITION: Record<TokenomyLabel, { row: number; col: number; span?: number; textAlign?: string }> = {
  play_to_earn: { row: 1, col: 1, span: 2, textAlign: 'center' },
  private_sale: { row: 2, col: 1 },
  public_sale: { row: 2, col: 2 },
  team: { row: 3, col: 1 },
  advisor: { row: 3, col: 2 },
  liquidity: { row: 4, col: 1 },
  staking_reward: { row: 4, col: 2 },
  marketing: { row: 5, col: 1 },
  airdrop: { row: 5, col: 2 },
  community_ecosystem: { row: 6, col: 1, span: 2, textAlign: 'center' },
}
