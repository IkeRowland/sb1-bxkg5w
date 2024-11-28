"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartAxis } from "@/components/dashboard/chart-axis"
import { TooltipContent } from "@/components/analytics/charts/tooltip-content"
import { chartColors } from "@/lib/constants/chart-colors"

const data = [
  { month: "Jan", actual: 82, predicted: 83 },
  { month: "Feb", actual: 85, predicted: 84 },
  { month: "Mar", actual: 88, predicted: 87 },
  { month: "Apr", actual: 86, predicted: 88 },
  { month: "May", actual: null, predicted: 90 },
  { month: "Jun", actual: null, predicted: 91 },
]

export function PredictionChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Prediction</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <ChartAxis type="xAxis" dataKey="month" />
              <ChartAxis
                type="yAxis"
                tickFormatter={(value: number) => `${value}%`}
              />
              <Tooltip content={TooltipContent} />
              <Line
                name="Actual"
                type="monotone"
                dataKey="actual"
                strokeWidth={2}
                stroke={chartColors.primary}
                activeDot={{
                  r: 6,
                  style: { fill: chartColors.primary },
                }}
              />
              <Line
                name="Predicted"
                type="monotone"
                dataKey="predicted"
                strokeWidth={2}
                stroke={chartColors.secondary}
                strokeDasharray="5 5"
                activeDot={{
                  r: 6,
                  style: { fill: chartColors.secondary },
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}