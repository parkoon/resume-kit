import { readJSON, updateJSON } from '@Server/helpers/JSONTool'
import { Education } from '@Shared/types/Education'
import { educationPath } from '@Server/paths'

const Service = {
  async getAllEducations() {
    try {
      const educations = await readJSON<Education[]>(educationPath)
      return educations
    } catch (err) {
      throw new Error(err)
    }
  },
  async addEducation(education: Education) {
    try {
      const educations = await this.getAllEducations()
      updateJSON(educationPath, [...educations, education])
    } catch (err) {
      throw new Error(err)
    }
  },
  async deleteEducation(id: string) {
    try {
      const educations = await this.getAllEducations()
      updateJSON(
        educationPath,
        educations.filter((education) => education.id !== id)
      )
    } catch (err) {
      throw new Error(err)
    }
  },
  async updateEducation(id: string, newCareer: Education) {
    try {
      const educations = await this.getAllEducations()
      updateJSON(
        educationPath,
        educations.map((education) => (education.id === id ? newCareer : education))
      )
    } catch (err) {
      throw new Error(err)
    }
  },
}

export default Service
