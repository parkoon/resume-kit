import jsonfile from 'jsonfile'

import { Career } from '@Shared/types/Career'

import { careerPath } from '../../paths'

const Service = {
  async getCareer() {
    try {
      const career = jsonfile.readFileSync(careerPath)
      return career
    } catch (err) {
      throw new Error(err)
    }
  },
  async saveCareer(career: Career) {
    try {
      jsonfile.writeFileSync(careerPath, career)
    } catch (err) {
      throw new Error(err)
    }
  },
}

export default Service
