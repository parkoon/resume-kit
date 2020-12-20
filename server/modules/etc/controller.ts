import { Request, Response } from 'express'
import etcService from './service'

const Controller = {
  async getEtc(req: Request, res: Response) {
    try {
      const etc = await etcService.getEtc()
      res.json(etc)
    } catch (err) {
      res.status(500).end()
    }
  },
  async saveEtc(req: Request, res: Response) {
    try {
      await etcService.saveEtc(req.body)
      res.status(200).end()
    } catch (err) {
      res.status(500).end()
    }
  },
}

export default Controller
