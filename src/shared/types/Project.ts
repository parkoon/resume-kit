import { SkillTitle } from './Skill'

export type Task = {
  id: string
  title: string
}
export type Project = {
  id: string
  title: string // 프로젝명
  description: string // 프로젝트 간단 설명
  where: string // 회사명
  startedAt: string // 프로젝트 시작일
  endedAt?: string // 프로젝트 종료일
  completed: boolean // 프로젝트 종료 여부
  skills: SkillTitle[] // 기술 스펙
  tasks: Task[] // 업무 내용
}
