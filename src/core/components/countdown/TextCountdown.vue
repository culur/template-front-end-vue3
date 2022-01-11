<script setup lang="ts">
import { useCountdown } from '@/src/core/hooks/useCountdown'
import { dayAndTimeLeft } from '@/src/core/utils/dayjs/date-format'
import type { ConfigType } from 'dayjs'
import { PropType } from 'vue'
const { t } = useI18n()
const props = defineProps({
  countTo: { type: [Number, String, Date, Object] as PropType<ConfigType> },
})
const { duration } = useCountdown({ date: props.countTo })
const emptyDuration = { days: '-', timeLeft: '--:--:--' }
const formattedDuration = computed(() =>
  duration.value ? dayAndTimeLeft(duration.value) : emptyDuration
)
</script>

<template>
  <span v-if="!!countTo">
    {{ t('misc.days', Number(formattedDuration.days)) }}
    {{ ' ' }}
    {{ formattedDuration.timeLeft }}
  </span>
  <span v-else> --:--:-- </span>
</template>
