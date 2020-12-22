import { Request, Response } from 'express'
import catchAsync from '@Server/helpers/catchAsync'
import etcService from './service'

const Controller = {
  getAllEtcs: catchAsync(async (req: Request, res: Response) => {
    const career = await etcService.getAllEtcs()
    res.json(career)
  }),
  addEtc: catchAsync(async (req: Request, res: Response) => {
    await etcService.addEtc(req.body)
    res.status(200).end()
  }),
  deleteEtc: catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id
    await etcService.deleteEtc(id)
    res.status(200).end()
  }),
  updateEtc: catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id
    await etcService.updateEtc(id, req.body)
    res.status(200).end()
  }),
}

export default Controller
