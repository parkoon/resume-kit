import { Request, Response } from 'express'
import articleService from './service'

const Controller = {
  async getArticle(req: Request, res: Response) {
    try {
      const article = await articleService.getArticle()
      return article
    } catch (err) {}
  },
  async saveArticle(req: Request, res: Response) {},
}

export default Controller
