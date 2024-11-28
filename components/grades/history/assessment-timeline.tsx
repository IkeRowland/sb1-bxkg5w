"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartAxis } from "@/components/dashboard/chart-axis"

interface AssessmentTimelineProps {
  subject: string
}

const mockData = {
  mathematics: [
    { date: "2024-01", score: 82 },
    { date: "2024-02", score: 85 },
    { date: "2024-03", score: 88 },
    { date: "2024-04", score: 86 },
    { date: "2024-05", score: 89 },
  ],
  physics: [
    { date: "2024-01", score: 85 },
    { date: "2024-02", score: 88 },
    { date: "2024-03", score: 92 },
    { date: "2024-04", score: 90 },
    { date: "2024-05", score: 93 },
  ],
}

export function AssessmentTimeline({ subject }: AssessmentTimelineProps) {
  const data = mockData[subject as keyof typeof mockData] || mockData.mathematics

  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Timeline</CardTitle>
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
                              Score
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
                dataKey="score"
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