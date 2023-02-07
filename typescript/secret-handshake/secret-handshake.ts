const SECRETS: Map<string, string> = new Map([
  ["1",     "wink"],
  ["10" ,   "double blink"],
  ["100",   "close your eyes"],
  ["1000",  "jump"],
  ["10000", "Reverse"]
])

export function commands(n: number): string[] {
  const code: string[] = []
  const nBits: string = n.toString(2)
  for (let i = nBits.length - 1; i >= 0; i-- ) {
    if (nBits[i] == "1") {
      SECRETS.forEach((v, k) => {
        if (k.length <= nBits.length) {
          k = k.padStart(nBits.length, "0")
          if (k[i] == "1") { v == "Reverse" ? code.reverse() : code.push(v) }
        }
      })
    }
  }
  return code
}