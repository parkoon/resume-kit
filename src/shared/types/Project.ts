import { SkillTitle } from '@Shared/constants'

export type Project = {
  corp: string // 회사명
  completed: boolean // 프로젝트 종료 여부
  skills: SkillTitle[] // 기술 스펙
  title: string // 프로젝명
  description: string // 프로젝트 간단 설명
  tasks: string[] // 업무 내용
  startedAt: string // 프로젝트 시작일
  resignedAt?: string // 프로젝트 종료일
}
