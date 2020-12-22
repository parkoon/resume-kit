import { Request, Response } from 'express'
import catchAsync from '@Server/helpers/catchAsync'
import articleService from './service'

const Controller = {
  getAllArticles: catchAsync(async (req: Request, res: Response) => {
    const career = await articleService.getAllArticles()
    res.json(career)
  }),
  addArticle: catchAsync(async (req: Request, res: Response) => {
    await articleService.addArticle(req.body)
    res.status(200).end()
  }),

  deleteArticle: catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id
    await articleService.deleteArticle(id)
    res.status(200).end()
  }),
  updateArticle: catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id
    await articleService.updateArticle(id, req.body)
    res.status(200).end()
  }),
}

export default Controller
