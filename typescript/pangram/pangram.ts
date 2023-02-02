
const LETTERS = "abcdefghijklmnopqrstuvwxyz"

export function isPangram(sentence: string): boolean {
  const arrSentence: string[] = sentence.toLowerCase().split("")
  for (let i = 0; i < LETTERS.length; i++) {
    if (!arrSentence.includes(LETTERS[i])) { return false }
  }
  return true
}
