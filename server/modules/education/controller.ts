import { Request, Response } from 'express'
import educationService from './service'

const Controller = {
  async getEducation(req: Request, res: Response) {
    try {
      const education = await educationService.getEducation()
      res.json(education)
    } catch (err) {
      res.status(500).end()
    }
  },
  async saveEducation(req: Request, res: Response) {
    try {
      await educationService.saveEducation(req.body)
    } catch (err) {
      res.status(500).end()
    }
  },
}

export default Controller
