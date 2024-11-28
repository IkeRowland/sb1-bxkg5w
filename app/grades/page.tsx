import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { GradeTable } from "@/components/grades/grade-table"
import { GradeSummary } from "@/components/grades/grade-summary"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GradesPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Grades"
        text="View and track your academic performance across all subjects."
      />
      <div className="grid gap-6">
        <GradeSummary />
        <Tabs defaultValue="current" className="space-y-4">
          <TabsList>
            <TabsTrigger value="current">Current Term</TabsTrigger>
            <TabsTrigger value="history">Grade History</TabsTrigger>
          </TabsList>
          <TabsContent value="current" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Current Term Grades</CardTitle>
              </CardHeader>
              <CardContent>
                <GradeTable />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="history" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Grade History</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Historical grades will be implemented in the next phase.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  )
}