export default function bs_list(haystack: number[], needle: number): boolean {

  let lowPoint = 0;
  let highPoint = haystack.length;

  do {
    const midPoint = Math.floor(lowPoint + (highPoint - lowPoint) / 2)
    const midValue = haystack[midPoint]

    if (midValue === needle) {
      return true
    } else if (midValue > needle) {
      highPoint = midPoint
    } else {
      lowPoint = midPoint + 1
    }
  } while (lowPoint < highPoint)

  return false
}