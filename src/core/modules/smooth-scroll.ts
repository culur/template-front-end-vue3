import VueSmoothScroll from 'vue3-smooth-scroll'
import type { UserModule } from '~/types'

// Setup Pinia
// https://pinia.esm.dev/
export const install: UserModule = ({ app }) => {
  app.use(VueSmoothScroll)
}
