"use client"

import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { MetricsGrid } from "@/components/analytics/metrics/metrics-grid"
import { PredictionChart } from "@/components/analytics/prediction-chart"
import { ComparativeAnalysis } from "@/components/analytics/comparative-analysis"
import { SubjectList } from "@/components/analytics/subject-list"

export default function AnalyticsPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Analytics"
        text="Comprehensive analysis of academic performance and trends."
      />
      <div className="grid gap-6">
        <MetricsGrid />
        <div className="grid gap-6 md:grid-cols-2">
          <PredictionChart />
          <ComparativeAnalysis />
        </div>
        <SubjectList />
      </div>
    </DashboardShell>
  )
}