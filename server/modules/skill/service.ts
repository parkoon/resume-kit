import jsonfile from 'jsonfile'
import moment from 'moment'

import Skills from '@Shared/types/Skill'
import { updateJSON } from '@Server/helpers/JSONTool'
import { skillPath } from '@Server/paths'

const Service = {
  async getSkill() {
    try {
      const skill = jsonfile.readFileSync(skillPath)
      return skill
    } catch (err) {
      throw new Error(err)
    }
  },
  async saveSkill(skills: Skills) {
    try {
      updateJSON(skillPath, skills)
    } catch (err) {
      throw new Error(err)
    }
  },
}

export default Service
