export const returnSubContributionWidthPct = (contributions: number, subcontribution: number) => {
  return `${((subcontribution / contributions) * 100).toFixed(0)}%`
}