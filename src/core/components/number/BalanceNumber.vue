<script setup lang="ts">
import { get } from '@vueuse/core'
import { constants } from 'ethers'
import { PropType } from 'vue'
import { TokenBalance } from '../../stores/useBalanceStore'
import { NumberFormatOption } from './number-props.type'

const props = defineProps({
  balance: {
    type: Object as PropType<TokenBalance>,
    required: true,
  },
  chain: String,
  options: Object as PropType<Partial<NumberFormatOption>>,
})

const value = computed(() => get(props.balance).balance)
const numberOptions = computed(() => {
  const {
    balance: { decimals },
    options,
  } = get(props)
  const defaultOption = { decimals, displayDp: 2, pad: true }
  return {
    ...defaultOption,
    ...options,
  }
})
const validBalance = computed(() => get(props.balance)?.balance.gt(constants.NegativeOne) || false)
</script>

<template>
  <Number v-if="validBalance" :value="value" :options="numberOptions" />
  <span v-else>
    <icon-tabler:line-dashed class="text-gray-400" />
  </span>
</template>
