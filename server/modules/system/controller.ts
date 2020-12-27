import { Request, Response } from 'express'
import catchAsync from '@Server/helpers/catchAsync'

import systemService from './service'

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
  deploy: catchAsync(async (req: Request, res: Response) => {
    const homepage = await systemService.deploy()
    res.json({ homepage })
  }),
}

export default Controller
