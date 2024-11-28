"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface SubjectProgress {
  subject: string
  average: number
  target: number
}

const subjectProgress: SubjectProgress[] = [
  { subject: "Mathematics", average: 85, target: 90 },
  { subject: "Physics", average: 92, target: 85 },
  { subject: "English", average: 88, target: 85 },
  { subject: "History", average: 78, target: 80 },
]

export function GradeSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Subject Progress</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {subjectProgress.map((subject) => (
          <div key={subject.subject} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">{subject.subject}</span>
              <span className="text-muted-foreground">
                {subject.average}% / Target: {subject.target}%
              </span>
            </div>
            <Progress value={subject.average} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}