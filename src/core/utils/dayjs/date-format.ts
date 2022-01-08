import dayjs from 'dayjs'
import type { Duration } from 'dayjs/plugin/duration'

export type DurationFormatter<T extends Record<string, string>> = (duration: Duration) => T

export const dayAndTimeLeft: DurationFormatter<{ days: string; timeLeft: string }> = (
  duration: Duration,
) => {
  const days = duration.asDays()
  const timeLeft = dayjs.duration(days % 1, 'day')
  const timeLeftFormatted = timeLeft.format('HH:mm:ss')

  return {
    days: `${Math.floor(days)}`,
    timeLeft: timeLeftFormatted,
  }
}

export const dayHourMinuteLeft: DurationFormatter<{
  days: string
  hours: string
  minutes: string
}> = (duration: Duration) => {
  const days = duration.asDays()
  const timeLeft = dayjs.duration(days % 1, 'day')
  const hours = timeLeft.asHours()
  const minuteLeft = dayjs.duration(hours % 1, 'hour')
  const minutes = minuteLeft.asMinutes()

  return {
    days: Math.floor(days).toString().padStart(2, '0'),
    hours: Math.floor(hours).toString().padStart(2, '0'),
    minutes: Math.floor(minutes).toString().padStart(2, '0'),
  }
}
