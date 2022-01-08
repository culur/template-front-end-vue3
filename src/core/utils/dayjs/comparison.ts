import type { ConfigType } from 'dayjs'
import dayjs from 'dayjs'

export const isAfter = (date0: ConfigType, date1: ConfigType): boolean => {
  if (!date0 || !date1) return false
  return dayjs(date0).isAfter(date1)
}

export const isAfterNow = (date: ConfigType): boolean => {
  if (!date) return false
  return isAfter(date, dayjs())
}

export const isBefore = (date0: ConfigType, date1: ConfigType): boolean => {
  if (!date0 || !date1) return false
  return dayjs(date0).isBefore(date1)
}

export const isBeforeNow = (date: ConfigType): boolean => {
  if (!date) return false
  return isBefore(date, dayjs())
}
