import { Request, Response } from 'express'
import catchAsync from '@Server/helpers/catchAsync'
import educationService from './service'

const Controller = {
  getAllEducations: catchAsync(async (req: Request, res: Response) => {
    const career = await educationService.getAllEducations()
    res.json(career)
  }),
  addEducation: catchAsync(async (req: Request, res: Response) => {
    await educationService.addEducation(req.body)
    res.status(200).end()
  }),

  deleteEducation: catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id
    await educationService.deleteEducation(id)
    res.status(200).end()
  }),
  updateEducation: catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id
    await educationService.updateEducation(id, req.body)
    res.status(200).end()
  }),
}

export default Controller
