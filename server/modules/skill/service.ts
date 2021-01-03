import { updateJSON, readJSON } from '@Server/helpers/JSONTool'
import { skillPath } from '@Server/paths'
import { Skill, SkillJSON } from '@Shared/types/Skill'

const Service = {
  async getSkill() {
    try {
      const { data } = readJSON<SkillJSON>(skillPath)
      return data
    } catch (err) {
      throw new Error(err)
    }
  },
  async saveSkill(skills: Skill) {
    try {
      updateJSON(skillPath, skills)
    } catch (err) {
      throw new Error(err)
    }
  },
}

export default Service
