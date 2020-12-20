import { Request, Response } from 'express'
import articleService from './service'

const Controller = {
  async getArticle(req: Request, res: Response) {
    try {
      const article = await articleService.getArticle()
      res.json(article)
    } catch (err) {
      res.status(500).end()
    }
  },
  async saveArticle(req: Request, res: Response) {
    try {
      await articleService.saveArticle(req.body)
      res.status(200).end()
    } catch (err) {
      res.status(500).end()
    }
  },
}

export default Controller
