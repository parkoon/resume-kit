import { Request, Response } from 'express'
import systemService from './service'
import catchAsync from '@Server/helpers/catchAsync'

const Controller = {
  getSystem: catchAsync(async (req: Request, res: Response) => {
    const system = await systemService.getSystem()
    res.json(system)
  }),
  updateEnable: catchAsync(async (req: Request, res: Response) => {
    await systemService.updateEnable(req.body)
    res.status(200).end()
  }),
  updateSort: catchAsync(async (req: Request, res: Response) => {
    await systemService.updateSort(req.body)
    res.status(200).end()
  }),
}

export default Controller
