import { Request, Response } from 'express'
import skillService from './service'

const Controller = {
  async getSkill(req: Request, res: Response) {
    try {
      const skill = await skillService.getSkill()
      return skill
    } catch (err) {
      throw Error(err)
    }
  },
  async saveSkill(req: Request, res: Response) {},
}

export default Controller
