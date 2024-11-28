"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import { Grade } from "@/types/grades"

const mockGrades: Grade[] = [
  {
    id: "1",
    subject: "Mathematics",
    type: "test",
    score: 85,
    totalPoints: 100,
    date: "2024-03-15",
    term: 1,
    comments: "Excellent work on calculus problems"
  },
  {
    id: "2",
    subject: "Physics",
    type: "assignment",
    score: 92,
    totalPoints: 100,
    date: "2024-03-14",
    term: 1,
    comments: "Outstanding lab report"
  },
  {
    id: "3",
    subject: "English",
    type: "project",
    score: 88,
    totalPoints: 100,
    date: "2024-03-10",
    term: 1,
    comments: "Well-structured essay"
  }
]

export function GradeTable() {
  const [selectedSubject, setSelectedSubject] = useState<string>("all")

  const filteredGrades = selectedSubject === "all" 
    ? mockGrades 
    : mockGrades.filter(grade => grade.subject === selectedSubject)

  const subjects = Array.from(new Set(mockGrades.map(grade => grade.subject)))

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Select value={selectedSubject} onValueChange={setSelectedSubject}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select subject" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Subjects</SelectItem>
            {subjects.map(subject => (
              <SelectItem key={subject} value={subject}>
                {subject}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Subject</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Score</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Comments</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredGrades.map((grade) => (
            <TableRow key={grade.id}>
              <TableCell className="font-medium">{grade.subject}</TableCell>
              <TableCell className="capitalize">{grade.type}</TableCell>
              <TableCell>{`${grade.score}/${grade.totalPoints}`}</TableCell>
              <TableCell>{grade.date}</TableCell>
              <TableCell className="max-w-[200px] truncate">{grade.comments}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}