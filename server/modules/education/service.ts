import jsonfile from 'jsonfile'
import { educationPath } from '../../paths'

const Service = {
  async getEducation() {
    try {
      const education = jsonfile.readFileSync(educationPath)
      return education
    } catch (err) {
      throw Error(err)
    }
  },
  async saveEducation(education: any) {
    try {
      jsonfile.writeFileSync(educationPath, education)
    } catch (err) {
      throw new Error(err)
    }
  },
}

export default Service
