import jsonfile from 'jsonfile'
import { profilePath } from '../../paths'

const Service = {
  async getProfile() {
    try {
      const profile = jsonfile.readFileSync(profilePath)
      console.log(profile)
    } catch (err) {
      throw Error(err)
    }
  },
  async saveProfile() {},
}

export default Service
