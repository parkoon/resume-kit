import { Request, Response } from 'express'
import etcService from './service'

const Controller = {
  async getEtc(req: Request, res: Response) {
    try {
      const etc = await etcService.getEtc()
      return etc
    } catch (err) {}
  },
  async saveEtc(req: Request, res: Response) {},
}

export default Controller
