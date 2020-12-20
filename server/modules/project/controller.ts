import { Request, Response } from 'express'
import projectService from './service'

const Controller = {
  async getProject(req: Request, res: Response) {
    try {
      const project = await projectService.getProject()
      res.json(project)
    } catch (err) {
      res.status(500).json()
    }
  },
  async saveProject(req: Request, res: Response) {
    try {
      await projectService.saveProject(req.body)
      res.status(200).json()
    } catch (err) {
      res.status(500).json()
    }
  },
}

export default Controller
