import { tuple } from '@Shared/helpers'

/**
 * 스킬 분야
 */
export type SkillType = typeof skillTypes[number]
export const skillTypes = tuple('none', 'backend', 'frontend', 'database', 'etc', 'devOps')

/**
 * 스킬 레벨
 */
export type SkillLevel = 'none' | 'trainee' | 'junior' | 'middle' | 'senior'

export type Skill = {
  id: number
  title: string
  type: SkillType
  level: SkillLevel
}

export type SkillConfig = {
  sheets: SkillSheet[]
  categories: SkillCategory[]
}
export type SkillSheet = {
  id: string
  title: string
}
export type SkillCategory = {
  id: string
  title: string
}
export type SkillConfigJSON = {
  data: SkillConfig
  updatedAt: string
}

export type SkillJSON = {
  data: Skill[]
  updatedAt: string
}
