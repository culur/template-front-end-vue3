<script setup lang="ts">
import type { TokenomyLabel } from '../../config/home-tokenomy.config'
import { TOKENOMY_LABEL, TOKENOMY_LABEL_POSITION, TOKENOMY_SERIES, TOKEN_TOTAL_SUPPLY } from '../../config/home-tokenomy.config'
import { numberToPercent } from '@/src/core/utils/number/percent'
const { t, locale } = useI18n()

const props = defineProps({
  active: {
    type: Number,
    default: 0,
  },
})
const getPositionStyle = (label: TokenomyLabel) => {
  const { col, row, span, textAlign } = TOKENOMY_LABEL_POSITION[label]
  return {
    gridColumnStart: col,
    gridRowStart: row,
    gridColumn: span ? `span ${span} / span ${span}` : null,
    textAlign,
  }
}
</script>

<template>
  <div class="flex items-center">
    <ul class="grid grid-cols-2 gap-10px auto-rows-min w-full">
      <li
        v-for="(label, index) in TOKENOMY_LABEL"
        :key="label"
        :style="getPositionStyle(label)"
        class="bg-black bg-opacity-50 rounded-lg py-2 px-3 transition-colors duration-500 hover:bg-opacity-90"
        :class="active === index ? 'bg-opacity-90' : null"
      >
        <strong
          class="font-display font-normal text-[#DBF425] md:text-lg"
        >
          {{ t('home.tokenomy.legend.' + label) }}
        </strong>
        <p class="text-white md:text-base text-xs">
          <span>{{ numberToPercent(TOKENOMY_SERIES[index], 1) }}</span>
          {{' '}}
          <small>({{ t('home.tokenomy.n_tokens', { n: Intl.NumberFormat(locale).format(TOKENOMY_SERIES[index] * TOKEN_TOTAL_SUPPLY / 100) }) }})</small>
        </p>
      </li>
    </ul>
  </div>
</template>
