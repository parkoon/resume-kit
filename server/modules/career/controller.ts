import { Request, Response } from 'express'
import careerService from './service'

const Controller = {
  async getCareer(req: Request, res: Response) {
    try {
      const career = await careerService.getCareer()
      return career
    } catch (err) {}
  },
  async saveCareer(req: Request, res: Response) {},
}

export default Controller
