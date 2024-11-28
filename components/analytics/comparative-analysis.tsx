"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts"
import { ChartAxis } from "@/components/dashboard/chart-axis"

const data = [
  { subject: "Mathematics", student: 85, classAvg: 78, schoolAvg: 76 },
  { subject: "Physics", student: 92, classAvg: 82, schoolAvg: 80 },
  { subject: "Chemistry", student: 88, classAvg: 80, schoolAvg: 79 },
  { subject: "Biology", student: 90, classAvg: 85, schoolAvg: 83 },
  { subject: "English", student: 87, classAvg: 83, schoolAvg: 82 },
]

export function ComparativeAnalysis() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Comparison</CardTitle>
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
                        <div className="grid gap-2">
                          {payload.map((entry) => (
                            <div key={entry.name} className="flex flex-col">
                              <span className="text-[0.70rem] uppercase text-muted-foreground">
                                {entry.name}
                              </span>
                              <span className="font-bold text-muted-foreground">
                                {entry.value}%
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Bar
                name="Your Score"
                dataKey="student"
                fill="var(--theme-primary)"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                name="Class Average"
                dataKey="classAvg"
                fill="var(--chart-2)"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                name="School Average"
                dataKey="schoolAvg"
                fill="var(--chart-3)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}