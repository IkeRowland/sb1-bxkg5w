"use client"

import { Bar, BarChart, ResponsiveContainer } from "recharts"
import { ChartAxis } from "./chart-axis"

const data = [
  { subject: "Math", score: 85 },
  { subject: "English", score: 78 },
  { subject: "Science", score: 92 },
  { subject: "History", score: 88 },
  { subject: "Geography", score: 76 },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <ChartAxis 
          type="xAxis" 
          dataKey="subject" 
        />
        <ChartAxis 
          type="yAxis" 
          tickFormatter={(value: number) => `${value}%`} 
        />
        <Bar
          dataKey="score"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  )
}