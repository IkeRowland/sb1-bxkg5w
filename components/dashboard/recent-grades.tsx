"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const recentGrades = [
  {
    subject: "Mathematics",
    assessment: "Test 3",
    grade: "85%",
    date: "2024-03-15",
  },
  {
    subject: "English",
    assessment: "Essay",
    grade: "78%",
    date: "2024-03-14",
  },
  {
    subject: "Science",
    assessment: "Lab Report",
    grade: "92%",
    date: "2024-03-12",
  },
  {
    subject: "History",
    assessment: "Project",
    grade: "88%",
    date: "2024-03-10",
  },
]

export function RecentGrades() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Subject</TableHead>
          <TableHead>Assessment</TableHead>
          <TableHead>Grade</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentGrades.map((grade) => (
          <TableRow key={`${grade.subject}-${grade.assessment}`}>
            <TableCell className="font-medium">{grade.subject}</TableCell>
            <TableCell>{grade.assessment}</TableCell>
            <TableCell>{grade.grade}</TableCell>
            <TableCell>{grade.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}