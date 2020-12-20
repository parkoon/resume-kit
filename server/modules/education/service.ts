import jsonfile from 'jsonfile'
import { educationPath } from '../../paths'

const Service = {
  async getEducation() {
    try {
      const education = jsonfile.readFileSync(educationPath)
      console.log(education)
    } catch (err) {
      throw Error(err)
    }
  },
  async saveEducation() {},
}

export default Service
