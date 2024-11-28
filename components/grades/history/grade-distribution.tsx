"use client"

import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartAxis } from "@/components/dashboard/chart-axis"

interface GradeDistributionProps {
  subject: string
}

const mockData = {
  mathematics: [
    { grade: "A", count: 8 },
    { grade: "B", count: 12 },
    { grade: "C", count: 6 },
    { grade: "D", count: 3 },
    { grade: "F", count: 1 },
  ],
  physics: [
    { grade: "A", count: 10 },
    { grade: "B", count: 8 },
    { grade: "C", count: 5 },
    { grade: "D", count: 2 },
    { grade: "F", count: 0 },
  ],
}

export function GradeDistribution({ subject }: GradeDistributionProps) {
  const data = mockData[subject as keyof typeof mockData] || mockData.mathematics

  return (
    <Card>
      <CardHeader>
        <CardTitle>Grade Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <ChartAxis type="xAxis" dataKey="grade" />
              <ChartAxis type="yAxis" />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Count
                            </span>
                            <span className="font-bold text-muted-foreground">
                              {payload[0].value}
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
                dataKey="count"
                fill="var(--theme-primary)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}