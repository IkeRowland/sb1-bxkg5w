import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { AssessmentBreakdown } from "@/components/analytics/subject-details/assessment-breakdown"
import { SkillMatrix } from "@/components/analytics/subject-details/skill-matrix"
import { ImprovementAreas } from "@/components/analytics/subject-details/improvement-areas"
import { subjects, formatSubjectName } from "@/lib/subjects"

export function generateStaticParams() {
  return subjects.map((subject) => ({
    subject: subject,
  }))
}

interface Props {
  params: { subject: string }
}

export default function SubjectAnalyticsPage({ params }: Props) {
  const subject = params.subject.replace(/-/g, " ")
  const formattedSubject = formatSubjectName(subject)

  return (
    <DashboardShell>
      <DashboardHeader
        heading={`${formattedSubject} Analytics`}
        text="Detailed analysis of subject performance and improvement areas."
      />
      <div className="grid gap-6">
        <div className="grid gap-6 md:grid-cols-2">
          <AssessmentBreakdown />
          <SkillMatrix />
        </div>
        <ImprovementAreas />
      </div>
    </DashboardShell>
  )
}