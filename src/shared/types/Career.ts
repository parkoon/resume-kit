export type Career = {
  id: string
  completed: boolean
  startedAt: string
  endedAt?: string
  title: string
  subtitle: string
}
export type CareerJSON = {
  careers: Career[]
  updatedAt: string
}
