"use client"

import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { Overview } from "@/components/dashboard/overview"
import { RecentGrades } from "@/components/dashboard/recent-grades"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Dashboard"
        text="Welcome back! Here's an overview of your academic performance."
      />
      <StatsCards />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Performance Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Grades</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentGrades />
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}