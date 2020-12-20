import jsonfile from 'jsonfile'

import { Article } from '@Shared/types/Article'

import { articlePath } from '../../paths'

const Service = {
  async getArticle() {
    try {
      const article = jsonfile.readFileSync(articlePath)
      return article
    } catch (err) {
      throw new Error(err)
    }
  },
  async saveArticle(article: Article) {
    try {
      jsonfile.writeFileSync(articlePath, article)
    } catch (err) {
      throw new Error(err)
    }
  },
}

export default Service
