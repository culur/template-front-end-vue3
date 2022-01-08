import { tryOnScopeDispose, useInterval } from '@vueuse/core'
import type { ConfigType } from 'dayjs'
import type { Duration } from 'dayjs/plugin/duration'
import type { WatchStopHandle } from 'vue'
import { ref, watch } from 'vue'
import { fromNow } from '../utils/dayjs/duration'

export type UseCountDownOptions = {
  date: ConfigType
}

/**
 * Function return Dayjs.Duration object
 * @param options UseCountDownOptions - using object for future scaling
 * @returns
 */
export const useCountdown = (options: UseCountDownOptions) => {
  const { date } = options

  const duration = ref<Duration | null>(null)
  let stopWatchCounter: WatchStopHandle | null = null

  const counter = useInterval(1000)
  stopWatchCounter = watch(counter, updateDuration, { immediate: true })

  function updateDuration() {
    duration.value = fromNow(date)
    if (duration.value.asSeconds() <= 0)
      stopWatchCounter?.()
  }
  tryOnScopeDispose(stopWatchCounter)

  return {
    updateDuration,
    duration,
    counter,
    stopWatchCounter,
  }
}
