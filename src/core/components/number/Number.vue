<script setup lang="ts">
import { BigNumberish } from '@ethersproject/bignumber'
import { get } from '@vueuse/core'
import { commify, formatUnits } from 'ethers/lib/utils'
import { PropType } from 'vue'
import type { NumberFormatOption } from './number-props.type'

const props = defineProps({
  value: {
    type: [String, Number, Object] as PropType<BigNumberish>,
    required: true,
  },
  options: {
    type: Object as PropType<NumberFormatOption>,
    default: () => ({ decimals: 18, displayDp: 6, pad: true }),
  },
})

const formattedValue = computed(() => {
  const value = get(props.value)
  const { decimals, displayDp, pad } = get(props.options)
  const parsed = formatUnits(value, decimals)
  const formatted = commify(parsed)
  const [left, right] = formatted.split('.')
  let processedRight = right || ''
  processedRight = processedRight.substring(0, displayDp ?? 6)
  if (pad) {
    processedRight = processedRight.padEnd(displayDp, '0')
  } else {
    processedRight = processedRight.replace(/\.?0*$/, '')
  }
  return processedRight.length ? `${left}.${processedRight}` : left
})
</script>

<template>
  <span>
    {{ formattedValue }}
  </span>
</template>
