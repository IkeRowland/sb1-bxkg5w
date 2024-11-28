"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartAxis } from "@/components/dashboard/chart-axis"

const data = [
  { date: "2024-01", average: 82 },
  { date: "2024-02", average: 85 },
  { date: "2024-03", average: 88 },
  { date: "2024-04", average: 86 },
  { date: "2024-05", average: 89 },
  { date: "2024-06", average: 91 },
]

export function GradeTrendChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Grade Progression</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <ChartAxis type="xAxis" dataKey="date" />
              <ChartAxis
                type="yAxis"
                tickFormatter={(value: number) => `${value}%`}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Average
                            </span>
                            <span className="font-bold text-muted-foreground">
                              {payload[0].value}%
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Line
                type="monotone"
                dataKey="average"
                strokeWidth={2}
                activeDot={{
                  r: 6,
                  style: { fill: "var(--theme-primary)" },
                }}
                style={{
                  stroke: "var(--theme-primary)",
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}