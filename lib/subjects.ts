export const subjects = [
  "mathematics",
  "physics",
  "chemistry",
  "biology",
  "english",
  "history",
] as const

export type Subject = typeof subjects[number]

export function formatSubjectName(subject: string) {
  return subject.charAt(0).toUpperCase() + subject.slice(1)
}

export function validateSubject(subject: string): subject is Subject {
  return subjects.includes(subject as Subject)
}