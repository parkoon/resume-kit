import { Request, Response } from 'express'
import profileService from './service'

const Controller = {
  async getProfile(req: Request, res: Response) {
    try {
      const profile = await profileService.getProfile()
      return profile
    } catch (err) {}
  },
  async saveProfile(req: Request, res: Response) {},
}

export default Controller
