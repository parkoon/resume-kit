import jsonfile from 'jsonfile'
import { careerPath } from '../../paths'

const Service = {
  async getCareer() {
    try {
      const career = jsonfile.readFileSync(careerPath)
      console.log(career)
    } catch (err) {
      throw new Error(err)
    }
  },
  async saveCareer() {},
}

export default Service
