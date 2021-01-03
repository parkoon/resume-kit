import jsonfile from 'jsonfile'

import { Career, CareerJSON } from '@Shared/types/Career'

import { careerPath } from '../../paths'
import { readJSON, updateJSON } from '@Server/helpers/JSONTool'

const Service = {
  async getAllCareers() {
    try {
      const { data } = await readJSON<CareerJSON>(careerPath)
      return data
    } catch (err) {
      throw new Error(err)
    }
  },
  async addCareer(career: Career) {
    try {
      const careers = await this.getAllCareers()
      updateJSON(careerPath, [...careers, career])
    } catch (err) {
      throw new Error(err)
    }
  },
  async deleteCareer(id: string) {
    try {
      const careers = await this.getAllCareers()
      updateJSON(
        careerPath,
        careers.filter((career) => career.id !== id)
      )
    } catch (err) {
      throw new Error(err)
    }
  },
  async updateCareer(id: string, newCareer: Career) {
    try {
      const careers = await this.getAllCareers()
      updateJSON(
        careerPath,
        careers.map((career) => (career.id === id ? newCareer : career))
      )
    } catch (err) {
      throw new Error(err)
    }
  },
}

export default Service
