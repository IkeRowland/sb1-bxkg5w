"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface SkillMetric {
  skill: string
  proficiency: number
  description: string
}

const mathSkills: SkillMetric[] = [
  {
    skill: "Problem Solving",
    proficiency: 85,
    description: "Ability to solve complex mathematical problems",
  },
  {
    skill: "Analytical Thinking",
    proficiency: 90,
    description: "Critical analysis and logical reasoning",
  },
  {
    skill: "Numerical Computation",
    proficiency: 88,
    description: "Accuracy in calculations and numerical operations",
  },
  {
    skill: "Mathematical Concepts",
    proficiency: 82,
    description: "Understanding of core mathematical principles",
  },
]

export function SkillMatrix() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Skills Assessment</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mathSkills.map((skill) => (
            <div key={skill.skill} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{skill.skill}</span>
                <span className="text-muted-foreground">{skill.proficiency}%</span>
              </div>
              <Progress value={skill.proficiency} />
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}