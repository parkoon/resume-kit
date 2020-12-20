import { Request, Response } from 'express'
import profileService from './service'

const Controller = {
  async getProfile(req: Request, res: Response) {
    try {
      const profile = await profileService.getProfile()
      res.json(profile)
    } catch (err) {
      res.status(500).end()
    }
  },
  async saveProfile(req: Request, res: Response) {
    try {
      await profileService.saveProfile(req.body)
      res.status(200).end()
    } catch (err) {
      res.status(500).end()
    }
  },
}

export default Controller
