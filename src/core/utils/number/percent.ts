export const numberToPercent = (number: number, multiplier = 10) => {
  return `${Math.round(number * multiplier * 100) / 100}%`
}
