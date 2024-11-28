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

const termData = [
  {
    term: "Term 1 2024",
    overallAverage: 88,
    highestSubject: "Physics",
    lowestSubject: "History",
    totalAssessments: 15,
    status: "Completed",
  },
  {
    term: "Term 4 2023",
    overallAverage: 85,
    highestSubject: "Mathematics",
    lowestSubject: "English",
    totalAssessments: 18,
    status: "Completed",
  },
  {
    term: "Term 3 2023",
    overallAverage: 82,
    highestSubject: "Biology",
    lowestSubject: "Chemistry",
    totalAssessments: 16,
    status: "Completed",
  },
]

export function TermSummary() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Term</TableHead>
          <TableHead>Average</TableHead>
          <TableHead>Best Subject</TableHead>
          <TableHead>Needs Improvement</TableHead>
          <TableHead>Assessments</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {termData.map((term) => (
          <TableRow key={term.term}>
            <TableCell className="font-medium">{term.term}</TableCell>
            <TableCell>{term.overallAverage}%</TableCell>
            <TableCell>{term.highestSubject}</TableCell>
            <TableCell>{term.lowestSubject}</TableCell>
            <TableCell>{term.totalAssessments}</TableCell>
            <TableCell>
              <Badge
                variant={term.status === "Completed" ? "default" : "secondary"}
              >
                {term.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}