export default function isEqualString(a: string, b: string, ignoringCase = true) {
  return ignoringCase ? a.toLowerCase() === b.toLowerCase() : a === b
}
