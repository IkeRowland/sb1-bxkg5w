import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { AssessmentTimeline } from "@/components/grades/history/assessment-timeline"
import { GradeDistribution } from "@/components/grades/history/grade-distribution"
import { AssessmentTable } from "@/components/grades/history/assessment-table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { subjects, formatSubjectName } from "@/lib/subjects"

export function generateStaticParams() {
  return subjects.map((subject) => ({
    subject: subject,
  }))
}

interface Props {
  params: { subject: string }
}

export default function SubjectHistoryPage({ params }: Props) {
  const subject = params.subject.replace(/-/g, " ")
  const formattedSubject = formatSubjectName(subject)

  return (
    <DashboardShell>
      <DashboardHeader
        heading={`${formattedSubject} History`}
        text="Detailed assessment history and performance analysis."
      />
      <div className="grid gap-6">
        <div className="grid gap-6 md:grid-cols-2">
          <AssessmentTimeline subject={subject} />
          <GradeDistribution subject={subject} />
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Assessment History</CardTitle>
          </CardHeader>
          <CardContent>
            <AssessmentTable subject={subject} />
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}