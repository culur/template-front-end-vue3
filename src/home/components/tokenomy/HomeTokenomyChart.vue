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
      opacity: 0.2,
      type: 'pattern',
      pattern: {
        style: 'squares',
      },
    },
    stroke: {
      width: 2,
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
        color: '#A05D20',
        shadeTo: 'dark',
        shadeIntensity: 0,
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
  <section class="board-container">
    <div class="board">
      <div class="aspect-square flex items-center justify-center">
        <apexchart v-bind="chartOptions" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.board-container {
  @apply p-4;
}
.board {
  background-image: url("/img/home/tokenmetric/board.svg");
  @apply bg-center bg-contain bg-no-repeat;
}
</style>
