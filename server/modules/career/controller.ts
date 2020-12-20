import { Request, Response } from 'express'
import careerService from './service'

const Controller = {
  async getCareer(req: Request, res: Response) {
    try {
      const career = await careerService.getCareer()
      res.json(career)
    } catch (err) {
      res.status(500).end()
    }
  },
  async saveCareer(req: Request, res: Response) {
    try {
      await careerService.saveCareer(req.body)
      res.status(200).end()
    } catch (err) {
      res.status(500).end()
    }
  },
}

export default Controller
