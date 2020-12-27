import { profilePath } from '@Server/paths'
import { updateJSON, readJSON } from '@Server/helpers/JSONTool'
import { Profile } from '@Shared/types/Profile'

const Service = {
  async getProfile() {
    try {
      const profile = readJSON<Profile>(profilePath)
      return profile
    } catch (err) {
      throw Error(err)
    }
  },
  async saveProfile(profile: Profile) {
    try {
      updateJSON(profilePath, profile)
    } catch (err) {
      console.error(err)
      throw Error(err)
    }
  },
}

export default Service
