
const DNATORNA: { [dna: string]: string } = {
  "G": "C",
  "C": "G",
  "T": "A",
  "A": "U"
}

export function toRna(dna: string): string {
  let rna: string[] = [];
  for (let i = 0; i < dna.length; i++) {
    if (!DNATORNA[dna[i]]) { throw "Invalid input DNA." }
    rna.push(DNATORNA[dna[i]])
  }
  return rna.join("")
}