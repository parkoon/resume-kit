import jsonfile from 'jsonfile'

import { updateJSON } from '@Server/helpers/JSONTool'
import { skillPath } from '@Server/paths'
import { Skill } from '@Shared/types/Skill'

const Service = {
  async getSkill() {
    try {
      const skill = jsonfile.readFileSync(skillPath)
      return skill
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
