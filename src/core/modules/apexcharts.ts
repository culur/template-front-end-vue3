import VueApexCharts from 'vue3-apexcharts'
import type { UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  app.use(VueApexCharts)
}
