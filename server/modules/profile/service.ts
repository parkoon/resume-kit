import jsonfile from 'jsonfile'
import { profilePath } from '../../paths'

import { Profile } from '@Shared/types/Profile'

const Service = {
  async getProfile() {
    try {
      const profile = jsonfile.readFileSync(profilePath)
      return profile
    } catch (err) {
      throw Error(err)
    }
  },
  async saveProfile(profile: Profile) {
    try {
      jsonfile.writeFileSync(profilePath, profile)
    } catch (err) {
      throw Error(err)
    }
  },
}

export default Service
