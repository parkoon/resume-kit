export type CommonSection = {
  title: string
  subtitle: string
  period: { years: number; months: number }
  completed: boolean
  startedAt: string
  completedAt?: string
}
