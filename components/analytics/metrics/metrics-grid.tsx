"use client"

import { MetricCard } from "./metric-card"

const metrics = [
  { title: "Overall Performance", value: 85, target: 90, change: 2.5 },
  { title: "Class Ranking", value: 92, target: 95, change: 4.0 },
  { title: "Attendance Rate", value: 95, target: 98, change: -1.0 },
  { title: "Assignment Completion", value: 88, target: 90, change: 1.5 },
]

export function MetricsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <MetricCard key={metric.title} {...metric} />
      ))}
    </div>
  )
}