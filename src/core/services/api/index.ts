import { createRepository } from './repository'
import { DEFAULT_API_URL } from '~/core/constants/api'

const metaApi = createRepository(DEFAULT_API_URL)

export default metaApi
