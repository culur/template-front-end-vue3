<script setup lang="ts">
import { useCountdown } from '@/src/core/hooks/useCountdown'
import { dayHourMinuteLeft } from '@/src/core/utils/dayjs/date-format'
import type { ConfigType } from 'dayjs'
import { PropType } from 'vue'
const { t } = useI18n()
const props = defineProps({
  countTo: { type: [Number, String, Date, Object] as PropType<ConfigType> },
})
const { duration } = useCountdown({ date: props.countTo })
const formattedDuration = computed(() =>
  duration.value
    ? dayHourMinuteLeft(duration.value)
    : {
        days: '--',
        hours: '--',
        minutes: '--',
      }
)
const fallbackNumber = (value: string | number) => (Number.isNaN(Number(value)) ? 0 : Number(value))

const pluralize = computed(() => ({
  days: t('misc.days_only', fallbackNumber(formattedDuration.value.days)),
  hours: t('misc.hours_only', fallbackNumber(formattedDuration.value.hours)),
  minutes: t('misc.minutes_only', fallbackNumber(formattedDuration.value.minutes)),
}))
</script>

<template>
  <span class="full-text-countdown">
    <strong>
      {{ formattedDuration.days }}
    </strong>
    <span>
      {{ pluralize.days }}
    </span>
    <strong>
      {{ formattedDuration.hours }}
    </strong>
    <span>
      {{ pluralize.hours }}
    </span>
    <strong>
      {{ formattedDuration.minutes }}
    </strong>
    <span>
      {{ pluralize.minutes }}
    </span>
  </span>
</template>

<style lang="scss" scoped>
.full-text-countdown {
  @apply uppercase text-base;

  & > strong {
    @apply text-xl font-bold;
  }

  & > *:not(:last-child) {
    @apply mr-1;
  }
}
</style>