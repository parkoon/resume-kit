export type Etc = {
  id: string
  completed: boolean
  startedAt: string
  endedAt?: string
  title: string
  subtitle: string
}
export type EtcJSON = {
  data: Etc[]
  updatedAt: string
}
