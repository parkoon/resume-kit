import { Request, Response } from 'express'
import skillService from './service'

const Controller = {
  async getSkill(req: Request, res: Response) {
    try {
      const skill = await skillService.getSkill()
      res.json(skill)
    } catch (err) {
      res.status(500).end()
    }
  },
  async saveSkill(req: Request, res: Response) {
    try {
      await skillService.saveSkill(req.body)
      res.status(200).end()
    } catch (err) {
      res.status(500).end()
    }
  },
}

export default Controller
