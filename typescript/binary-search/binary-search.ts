function binSearch(haystack: number[], needle: number, min: number, max: number ): number {
  let   res = -1
  const mid = Math.floor((min + max) / 2)

  if (min >= max) { if (needle === haystack[min]) { return min } else { return -1 } }

  if (needle <= haystack[mid]) {
    res = binSearch(haystack, needle, min, mid)
  } else {
    res = binSearch(haystack, needle, mid + 1, max)
  }

  return res
}

export function find(haystack: number[], needle: number): number {
  const res = binSearch(haystack, needle, 0, haystack.length - 1)
  if (res !== -1) { return res } else { throw 'Value not in array' }
}