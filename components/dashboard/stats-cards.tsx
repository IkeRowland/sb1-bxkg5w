"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface StatsCard {
  title: string
  value: string
  description: string
}

const statsData: StatsCard[] = [
  {
    title: "Overall Average",
    value: "78.5%",
    description: "+2.5% from last term",
  },
  {
    title: "Attendance Rate",
    value: "95%",
    description: "Current academic year",
  },
  {
    title: "Assignments Due",
    value: "3",
    description: "This week",
  },
  {
    title: "Class Rank",
    value: "5th",
    description: "Out of 120 students",
  },
]

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {statsData.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}