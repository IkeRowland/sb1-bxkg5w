"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, TrendingUp, Clock } from "lucide-react"

interface ImprovementArea {
  topic: string
  priority: "high" | "medium" | "low"
  timeEstimate: string
  description: string
}

const areas: ImprovementArea[] = [
  {
    topic: "Calculus Integration",
    priority: "high",
    timeEstimate: "2-3 weeks",
    description: "Focus on complex integration techniques and applications",
  },
  {
    topic: "Vector Analysis",
    priority: "medium",
    timeEstimate: "1-2 weeks",
    description: "Strengthen understanding of vector operations and properties",
  },
  {
    topic: "Probability Theory",
    priority: "low",
    timeEstimate: "1 week",
    description: "Review basic probability concepts and distributions",
  },
]

const priorityColors = {
  high: "destructive",
  medium: "default",
  low: "secondary",
} as const

export function ImprovementAreas() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Areas for Improvement</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {areas.map((area) => (
            <div
              key={area.topic}
              className="flex flex-col space-y-2 rounded-lg border p-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-4 w-4" />
                  <span className="font-medium">{area.topic}</span>
                </div>
                <Badge variant={priorityColors[area.priority]}>
                  {area.priority} priority
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{area.description}</p>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{area.timeEstimate}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <TrendingUp className="h-4 w-4" />
                  <span>Expected Improvement: 15-20%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}