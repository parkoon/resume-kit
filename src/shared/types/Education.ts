export type Education = {
  id: string
  completed: boolean
  startedAt: string
  endedAt?: string
  title: string
  subtitle: string
}
export type EducationJSON = {
  educations: Education[]
  updatedAt: string
}