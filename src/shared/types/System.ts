export type SystemEnabled = {
  profile: boolean
  project: boolean
  career: boolean
  skill: boolean
  education: boolean
  etc: boolean
  article: boolean
}
export type SystemSort = {
  profile: number
  project: number
  career: number
  skill: number
  education: number
  etc: number
  article: number
}
export type System = {
  enabled: SystemEnabled
  sort: SystemSort
}

export type SystemJSON = {
  data: System
  updatedAt: string
}
