<script lang="ts">
import { defineComponent } from 'vue'
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
import { TOKENOMY_LABEL, TOKENOMY_SERIES } from '../../config/home-tokenomy.config'
import type { ApexComponentProps } from '@/src/core/typings/apex-chart.type'

export default defineComponent({
  components: {
    KinesisContainer,
    KinesisElement,
  },
})
</script>

<script setup lang="ts">
const { t } = useI18n()
const emit = defineEmits(['legend'])

const chartOptions: ApexComponentProps = {
  series: TOKENOMY_SERIES,
  // width: '150%',
  options: {
    chart: {
      type: 'pie',
      selection: {
        enabled: false,
      },
    },
    states: {
      active: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
    labels: TOKENOMY_LABEL,
    fill: {
      opacity: 1,
    },
    stroke: {
      width: 1,
      colors: undefined,
    },
    yaxis: {
      show: false,
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0,
        },
        spokes: {
          strokeWidth: 0,
        },
      },
    },
    theme: {
      monochrome: {
        enabled: true,
        color: '#68E517',
        shadeTo: 'dark',
        shadeIntensity: 0.8,
      },
    },
  },
  onDataPointMouseEnter(event: Event, chartContext: ApexCharts, config: { dataPointIndex: number; seriesIndex: number }) {
    emit('legend', config.dataPointIndex)
  },
  onDataPointMouseLeave() {
    emit('legend', -1)
  },
}
</script>

<template>
  <KinesisContainer>
    <KinesisElement type="depth" :strength="10">
      <div class="aspect-square">
        <apexchart v-bind="chartOptions" />
      </div>
    </KinesisElement>
  </KinesisContainer>
</template>
