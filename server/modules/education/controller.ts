import { Request, Response } from 'express'
import educationService from './service'

const Controller = {
  async getEducation(req: Request, res: Response) {
    try {
      const education = await educationService.getEducation()
      return education
    } catch (err) {}
  },
  async saveEducation(req: Request, res: Response) {},
}

export default Controller
