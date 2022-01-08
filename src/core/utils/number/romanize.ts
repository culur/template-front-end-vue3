import invariant from 'tiny-invariant'

const ROMAN_MAP = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
} as const

const allChars = Object.keys(ROMAN_MAP)
const allNumerals = Object.values(ROMAN_MAP)

export const romanize = (decimal: number) => {
  const typecheck = decimal > 0 || typeof decimal === 'number' || Math.floor(decimal) === decimal
  invariant(typecheck, 'Romanize expects a positive integer')
  invariant(decimal < 4000, 'Romanize only supports numbers up to 3999')

  let roman = ''
  for (let i = 0; i < allChars.length; i++) {
    while (decimal >= allNumerals[i]) {
      decimal -= allNumerals[i]
      roman += allChars[i]
    }
  }
  return roman
}

const romanPattern
  // eslint-disable-next-line max-len
  = /^(M{1,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})|M{0,4}(CM|C?D|D?C{1,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})|M{0,4}(CM|CD|D?C{0,3})(XC|X?L|L?X{1,3})(IX|IV|V?I{0,3})|M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|I?V|V?I{1,3}))$/

export const deromanize = (romanStr: string) => {
  invariant(typeof romanStr === 'string', 'Romanize expects a string')
  invariant(romanPattern.test(romanStr), 'Romanize expects a valid roman numeral')
  const romanString = romanStr.toUpperCase()
  let arabic = 0
  let iteration = romanString.length
  while (iteration--) {
    const cumulative = ROMAN_MAP[romanString[iteration] as keyof typeof ROMAN_MAP]
    if (cumulative < ROMAN_MAP[romanString[iteration + 1] as keyof typeof ROMAN_MAP])
      arabic -= cumulative
    else
      arabic += cumulative
  }
  return arabic
}
