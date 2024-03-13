import { DOUBLE_SYMBOLS, SINGLE_SYMBOLS } from "../config/constants"

const DOUBLE_SYMBOLS_CHECK = DOUBLE_SYMBOLS.map((element) =>
  element.toLowerCase()
)
const SINGLE_SYMBOLS_CHECK = SINGLE_SYMBOLS.map((element) =>
  element.toLowerCase()
)

export const findSymbolOnPhrases = (word: string): [string, boolean][] => {
  const result: [string, boolean][] = []
  const wordLower = word.toLowerCase()
  let isSymbolChecked = false

  for (let i = 0; i < wordLower.length - 1; i++) {
    const doubleSymbols = wordLower.substring(i, i + 2)
    if (DOUBLE_SYMBOLS_CHECK.includes(doubleSymbols) && !isSymbolChecked) {
      if (i > 0) result.push([word.substring(0, i), false])
      result.push([
        word.substring(i, i + 1).toUpperCase() + word.substring(i + 1, i + 2),
        true,
      ])
      isSymbolChecked = true
      if (i + 2 < word.length) result.push([word.substring(i + 2), false])
      return result
    }
  }

  if (!isSymbolChecked) {
    for (let i = 0; i < wordLower.length; i++) {
      const singleSymbol = wordLower.substring(i, i + 1)
      if (SINGLE_SYMBOLS_CHECK.includes(singleSymbol) && !isSymbolChecked) {
        if (i > 0) result.push([word.substring(0, i).toUpperCase(), false])
        result.push([word.substring(i, i + 1), true])
        if (i + 1 < word.length) result.push([word.substring(i + 1), false])
        return result
      }
    }
  }

  if (!isSymbolChecked) {
    result.push([word, false])
  }

  return result
}
