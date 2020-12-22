import { Request, Response } from 'express'
import projectService from './service'
import catchAsync from '@Server/helpers/catchAsync'

const Controller = {
  getProject: catchAsync(async (req: Request, res: Response) => {
    const projects = await projectService.getAllProjects()
    res.json(projects)
  }),
  updateProject: catchAsync(async (req: Request, res: Response) => {
    await projectService.updateProject(req.body)
    res.status(200).json()
  }),
  addProject: catchAsync(async (req: Request, res: Response) => {
    await projectService.addProject(req.body)
    res.status(200).end()
  }),
  updateProjectById: catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id
    await projectService.updateProjectById(id, req.body)
    res.status(200).end()
  }),
  deleteProject: catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id
    await projectService.deleteProject(id)
    res.status(200).end()
  }),
}

export default Controller
