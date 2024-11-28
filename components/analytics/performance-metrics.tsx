"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowUp, ArrowDown, Minus } from "lucide-react"

interface MetricProps {
  title: string
  value: number
  target: number
  change: number
}

function MetricCard({ title, value, target, change }: MetricProps) {
  const getTrendIcon = () => {
    if (change > 0) return <ArrowUp className="h-4 w-4 text-green-500" />
    if (change < 0) return <ArrowDown className="h-4 w-4 text-red-500" />
    return <Minus className="h-4 w-4 text-gray-500" />
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {getTrendIcon()}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}%</div>
        <Progress value={(value / target) * 100} className="mt-2" />
        <p className="mt-2 text-xs text-muted-foreground">
          Target: {target}% ({change > 0 ? "+" : ""}{change}% from last term)
        </p>
      </CardContent>
    </Card>
  )
}

export function PerformanceMetrics() {
  const metrics = [
    { title: "Overall Performance", value: 85, target: 90, change: 2.5 },
    { title: "Class Ranking", value: 92, target: 95, change: 4.0 },
    { title: "Attendance Rate", value: 95, target: 98, change: -1.0 },
    { title: "Assignment Completion", value: 88, target: 90, change: 1.5 },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <MetricCard key={metric.title} {...metric} />
      ))}
    </div>
  )
}