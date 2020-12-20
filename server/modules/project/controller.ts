import { Request, Response } from 'express'
import projectService from './service'

const Controller = {
  async getProject(req: Request, res: Response) {
    try {
      const project = await projectService.getProject()
      return project
    } catch (err) {
      throw Error(err)
    }
  },
  async saveProject(req: Request, res: Response) {},
}

export default Controller
