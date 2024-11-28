export function formatPercentage(value: number): string {
  return `${value}%`
}

export function calculatePercentage(value: number, total: number): number {
  return (value / total) * 100
}