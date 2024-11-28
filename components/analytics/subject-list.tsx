"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown } from "lucide-react"
import Link from "next/link"

const subjects = [
  {
    name: "Mathematics",
    average: 85,
    trend: "up",
    assessments: 12,
    lastGrade: "A-",
  },
  {
    name: "Physics",
    average: 92,
    trend: "up",
    assessments: 10,
    lastGrade: "A",
  },
  {
    name: "Chemistry",
    average: 78,
    trend: "down",
    assessments: 11,
    lastGrade: "B+",
  },
  {
    name: "Biology",
    average: 88,
    trend: "up",
    assessments: 9,
    lastGrade: "A-",
  },
]

export function SubjectList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Subject Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {subjects.map((subject) => (
            <Link
              key={subject.name}
              href={`/analytics/${subject.name.toLowerCase()}`}
              className="block"
            >
              <div className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{subject.name}</span>
                    {subject.trend === "up" ? (
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-500" />
                    )}
                  </div>
                  <div className="flex space-x-2 text-sm text-muted-foreground">
                    <span>{subject.assessments} assessments</span>
                    <span>•</span>
                    <span>Last grade: {subject.lastGrade}</span>
                  </div>
                </div>
                <Badge variant="outline">{subject.average}%</Badge>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}