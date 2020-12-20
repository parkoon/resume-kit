import jsonfile from 'jsonfile'
import { skillPath } from '../../paths'

const Service = {
  async getSkill() {
    try {
      const skill = jsonfile.readFileSync(skillPath)
      console.log(skill)
    } catch (err) {
      throw new Error(err)
    }
  },
  async saveSkill() {},
}

export default Service
