import type { ConfigType } from 'dayjs'
import dayjs from 'dayjs'
import type { Duration } from 'dayjs/plugin/duration'
import durationPlugin from 'dayjs/plugin/duration'

dayjs.extend(durationPlugin)

/**
 * Return datetime range between two dates [start, end]
 * @param fromDate string | number | Date | Dayjs | null | undefined
 * @param toDate string | number | Date | Dayjs | null | undefined
 * @returns Dayjs Duration class
 */
export const getDuration = (fromDate: ConfigType, toDate: ConfigType): Duration => {
  const to = dayjs(toDate)

  return dayjs.duration(to.diff(fromDate))
}

/**
 * Return datetime range between current time and given date
 * If now > given date, then duration is in the past
 * If now < given date, then duration is in the future
 * @param date string | number | Date | Dayjs | null | undefined
 * @returns Dayjs Duration class
 */
export const fromNow = (date: ConfigType, noPastRange = true): Duration => {
  const now = dayjs()
  if (now.isAfter(date) || !date) {
    const duration = noPastRange || !date ? dayjs.duration(0, 's') : getDuration(date, now)
    console.debug('date', date, duration.asDays())
    return duration
  }
  return getDuration(now, date)
}
