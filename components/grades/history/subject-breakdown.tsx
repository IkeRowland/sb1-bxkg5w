"use client"

import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartAxis } from "@/components/dashboard/chart-axis"

const data = [
  { subject: "Mathematics", average: 88 },
  { subject: "Physics", average: 92 },
  { subject: "Chemistry", average: 85 },
  { subject: "Biology", average: 90 },
  { subject: "English", average: 87 },
  { subject: "History", average: 89 },
]

export function SubjectBreakdown() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Subject Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <ChartAxis type="xAxis" dataKey="subject" />
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
              <Bar
                dataKey="average"
                style={{
                  fill: "var(--theme-primary)",
                  opacity: 0.9,
                }}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}