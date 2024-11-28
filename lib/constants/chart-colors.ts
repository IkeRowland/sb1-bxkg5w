export const chartColors = {
  primary: "var(--theme-primary)",
  secondary: "var(--chart-2)",
  tertiary: "var(--chart-3)",
  quaternary: "var(--chart-4)",
  quinary: "var(--chart-5)",
} as const

export type ChartColor = keyof typeof chartColors