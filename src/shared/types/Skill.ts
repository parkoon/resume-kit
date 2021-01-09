/**
 * 스킬 레벨
 */
export type SkillLevel = 'none' | 'trainee' | 'junior' | 'middle' | 'senior'

export type Skill = {
  id: string
  position: string
  values: string[]
}

export type SkillConfig = {
  sheets: SkillSheet[]
}
export type SkillSheet = {
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
