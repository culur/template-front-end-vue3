import type { ApexOptions } from 'apexcharts'

export interface ApexComponentProps {
  options: ApexOptions
  type?: string
  series: ApexAxisChartSeries | ApexNonAxisChartSeries
  width?: string
  height?: string
  onDataPointMouseEnter: (event: Event, chartContext: ApexCharts, config: { dataPointIndex: number; seriesIndex: number }) => void
  onDataPointMouseLeave: (event: Event, chartContext: ApexCharts, config: { dataPointIndex: number; seriesIndex: number }) => void
}
