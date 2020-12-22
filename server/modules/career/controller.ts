import { Request, Response } from 'express'
import catchAsync from '@Server/helpers/catchAsync'
import careerService from './service'

const Controller = {
  getAllCareers: catchAsync(async (req: Request, res: Response) => {
    const career = await careerService.getAllCareers()
    res.json(career)
  }),
  addCareer: catchAsync(async (req: Request, res: Response) => {
    await careerService.addCareer(req.body)
    res.status(200).end()
  }),

  deleteCareer: catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id
    await careerService.deleteCareer(id)
    res.status(200).end()
  }),
  updateCareer: catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id
    await careerService.updateCareer(id, req.body)
    res.status(200).end()
  }),
}

export default Controller
