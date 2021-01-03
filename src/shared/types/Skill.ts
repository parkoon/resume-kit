import { tuple } from '@Shared/helpers'

/**
 * 스킬 스펙 종류
 */
export type SkillTitle = typeof skillTitles[number]
export const skillTitles = tuple(
  'Node.js',
  'TypeScript',
  'Express.js',
  'AWS',
  'nginx',
  'Apache',
  'PHP',
  'Java',
  'Spring',
  'Python',
  'C/C++',
  'Database',
  'Redis',
  'MySQL',
  'MongoDB',
  'Oracle',
  'Front-end',
  'Next.js',
  'React.js',
  'javascript',
  'HTML/CSS',
  'Ubuntu',
  'Vim',
  'Security',
  'VS Code',
  'Jira',
  'Confluence',
  'Bitbucket',
  'DevOps',
  'Git / Github',
  'Agile',
  'Socket.io',
  'Jenkins'
)

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
  title: SkillTitle
  type: SkillType
  level: SkillLevel
}

export type SkillJSON = {
  data: Skill[]
  updatedAt: string
}
