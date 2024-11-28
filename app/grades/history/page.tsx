"use client"

import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { GradeTrendChart } from "@/components/grades/history/grade-trend-chart"
import { SubjectBreakdown } from "@/components/grades/history/subject-breakdown"
import { TermSummary } from "@/components/grades/history/term-summary"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function GradeHistoryPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Grade History"
        text="Track your academic progress over time."
      />
      <div className="grid gap-6">
        <div className="grid gap-6 md:grid-cols-2">
          <GradeTrendChart />
          <SubjectBreakdown />
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Term Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <TermSummary />
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}