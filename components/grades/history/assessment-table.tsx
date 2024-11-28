"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

interface AssessmentTableProps {
  subject: string
}

const mockData = {
  mathematics: [
    {
      date: "2024-05-15",
      type: "Test",
      topic: "Calculus",
      score: 89,
      grade: "A-",
      feedback: "Excellent work on derivatives",
    },
    {
      date: "2024-04-20",
      type: "Assignment",
      topic: "Linear Algebra",
      score: 85,
      grade: "B+",
      feedback: "Good understanding of matrices",
    },
    {
      date: "2024-03-10",
      type: "Project",
      topic: "Statistics",
      score: 92,
      grade: "A",
      feedback: "Outstanding data analysis",
    },
  ],
  physics: [
    {
      date: "2024-05-12",
      type: "Lab",
      topic: "Mechanics",
      score: 88,
      grade: "B+",
      feedback: "Well-executed experiments",
    },
    {
      date: "2024-04-18",
      type: "Test",
      topic: "Thermodynamics",
      score: 91,
      grade: "A-",
      feedback: "Strong problem-solving skills",
    },
    {
      date: "2024-03-15",
      type: "Project",
      topic: "Wave Motion",
      score: 94,
      grade: "A",
      feedback: "Excellent research work",
    },
  ],
}

export function AssessmentTable({ subject }: AssessmentTableProps) {
  const data = mockData[subject as keyof typeof mockData] || mockData.mathematics

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Topic</TableHead>
          <TableHead>Score</TableHead>
          <TableHead>Grade</TableHead>
          <TableHead>Feedback</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((assessment, index) => (
          <TableRow key={index}>
            <TableCell>{assessment.date}</TableCell>
            <TableCell>
              <Badge variant="outline">{assessment.type}</Badge>
            </TableCell>
            <TableCell>{assessment.topic}</TableCell>
            <TableCell>{assessment.score}%</TableCell>
            <TableCell>{assessment.grade}</TableCell>
            <TableCell className="max-w-[200px] truncate">
              {assessment.feedback}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}