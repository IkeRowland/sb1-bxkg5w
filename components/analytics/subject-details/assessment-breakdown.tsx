"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Pie, PieChart, ResponsiveContainer, Tooltip, Cell } from "recharts"

const data = [
  { name: "Tests", value: 45, color: "var(--chart-1)" },
  { name: "Assignments", value: 30, color: "var(--chart-2)" },
  { name: "Projects", value: 15, color: "var(--chart-3)" },
  { name: "Exams", value: 10, color: "var(--chart-4)" },
]

export function AssessmentBreakdown() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Assessment Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">
                            {payload[0].name}
                          </span>
                          <span className="font-bold text-muted-foreground">
                            {payload[0].value}%
                          </span>
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}