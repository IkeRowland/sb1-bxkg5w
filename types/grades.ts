export interface Grade {
  id: string
  subject: string
  type: 'test' | 'assignment' | 'exam' | 'project'
  score: number
  totalPoints: number
  date: string
  term: number
  comments?: string
  studentId?: string
  teacherId?: string
}

export interface Subject {
  id: string
  name: string
  code: string
  teacher: string
  grades: Grade[]
}

export interface Term {
  id: number
  name: string
  startDate: string
  endDate: string
}

export interface GradeInput {
  studentId: string
  subject: string
  type: 'test' | 'assignment' | 'exam' | 'project'
  score: number
  totalPoints: number
  date: string
  comments?: string
}