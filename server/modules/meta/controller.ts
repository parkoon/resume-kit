import { Request, Response } from 'express'
import metaService from './service'
import catchAsync from '@Server/helpers/catchAsync'

const Controller = {
  async getMeta(req: Request, res: Response) {
    try {
      const meta = await metaService.getMeta()
      res.json(meta)
    } catch (err) {
      res.status(500).end()
    }
  },
  async updateMeta(req: Request, res: Response) {
    try {
      await metaService.updateMeta(req.body)
      res.status(200).end()
    } catch (err) {
      res.status(500).end()
    }
  },

  createImageForOpenGraph: catchAsync(async (req: Request, res: Response) => {
    const filename = await metaService.createImage(req.body)
    res.status(200).json({ filename })
  }),

  updateHomepage: catchAsync(async (req: Request, res: Response) => {
    await metaService.updateHomepageInPackage(req.body)
    res.status(200).end()
  }),
}

export default Controller
