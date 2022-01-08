export const DEFAULT_DEV_API_URL = 'https://api_dev.metaseed.life/v1/'
export const DEFAULT_PROD_API_URL = 'https://api_dev.metaseed.life/v1/'

export const DEFAULT_API_URL = import.meta.env.DEV ? DEFAULT_DEV_API_URL : DEFAULT_PROD_API_URL
