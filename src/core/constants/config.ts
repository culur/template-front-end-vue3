/**
 * PROJECT LINKS
 */

export const PROJECT_COMMUNITIES = {
  twitter: {
    name: 'Twitter',
    url: 'https://twitter.com/metaseedverse',
  },
  telegram: {
    name: 'Telegram',
    url: 'https://t.me/metaseedverse',
  },
  discord: {
    name: 'Discord',
    url: 'https://discord.gg/FTPtne97hM',
  },
  medium: {
    name: 'Medium',
    url: 'https://medium.com/@metaseeds',
  },
}

export type ProjectCommunity = keyof typeof PROJECT_COMMUNITIES

export const LIST_COMMUNITIES = Object.keys(PROJECT_COMMUNITIES) as ProjectCommunity[]

/**
 * PROJECT CONFIG
 */

export const META_WHITELIST_DATE = '2022-01-01T07:00:00.000Z'
export const META_PRESALE_DATE = ''
export const META_PUBLIC_SALE_DATE = ''
export const META_PRESALE_END_DATE = '2022-01-20T07:00:00.000Z'
