"use client"

import { XAxis, YAxis } from "recharts"

interface ChartAxisProps {
  type: "xAxis" | "yAxis"
  dataKey?: string
  tickFormatter?: (value: number) => string
}

export function ChartAxis({ type, dataKey, tickFormatter }: ChartAxisProps) {
  const commonProps = {
    stroke: "#888888",
    fontSize: 12,
    tickLine: false,
    axisLine: false,
  }

  if (type === "xAxis") {
    return <XAxis {...commonProps} dataKey={dataKey} />
  }

  return <YAxis {...commonProps} tickFormatter={tickFormatter} />
}