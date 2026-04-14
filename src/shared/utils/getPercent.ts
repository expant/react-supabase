export function getPercent(votes: number, total: number): number {
  return total > 0 ? Math.round((votes / total) * 100) : 0;
}
