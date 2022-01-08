export default function middleEllipsis(str: string, keepFirst = 6, keepLast = 4, dotCount = 3) {
  let convertedStr = ''
  convertedStr += str.substring(0, keepFirst)
  convertedStr += '.'.repeat(dotCount)
  convertedStr += str.substring(str.length - keepLast, str.length)
  return convertedStr
}
