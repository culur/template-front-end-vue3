<script setup lang="ts">
import { BigNumberish } from 'ethers'
import { PropType } from 'vue'
import { NumberFormatOption } from './number-props.type'

const props = defineProps({
  currency: {
    type: String,
    required: true,
  },
  value: {
    type: [String, Number, Object] as PropType<BigNumberish>,
    required: true,
  },
  displayIcon: {
    type: Boolean,
    default: true,
  },
  options: {
    type: Object as PropType<NumberFormatOption>,
    default: () => ({ decimals: 18, displayDp: 4, pad: true }),
  },
})
</script>

<template>
  <div class="flex items-center">
    <div v-if="displayIcon" class="flex-shrink-0 mr-[0.5em]">
      <img
        class="h-[1.2em] w-auto"
        :src="`/img/symbol/${currency.toLowerCase()}.png`"
        :alt="currency"
      />
    </div>
    <div class="text-[1em]">
      <Number v-bind="props" class="mr-[0.5em]" />
      <span class="uppercase">
        {{ currency }}
      </span>
    </div>
  </div>
</template>
