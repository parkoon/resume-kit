import jsonfile from 'jsonfile'

import { SkillTitle } from '@Shared/types/Skill'

import { skillPath } from '../../paths'

const Service = {
  async getSkill() {
    try {
      const skill = jsonfile.readFileSync(skillPath)
      return skill
    } catch (err) {
      throw new Error(err)
    }
  },
  async saveSkill(skill: SkillTitle[]) {
    try {
      jsonfile.writeFileSync(skillPath, skill)
    } catch (err) {
      throw new Error(err)
    }
  },
}

export default Service
