import { Article, ArticleJSON } from '@Shared/types/Article'
import { readJSON, updateJSON } from '@Server/helpers/JSONTool'
import { articlePath } from '@Server/paths'

const Service = {
  async getAllArticles() {
    try {
      const { data } = await readJSON<ArticleJSON>(articlePath)
      return data
    } catch (err) {
      throw new Error(err)
    }
  },
  async addArticle(article: Article) {
    try {
      const articles = await this.getAllArticles()
      updateJSON(articlePath, [...articles, article])
    } catch (err) {
      throw new Error(err)
    }
  },
  async deleteArticle(id: string) {
    try {
      const articles = await this.getAllArticles()
      updateJSON(
        articlePath,
        articles.filter((article) => article.id !== id)
      )
    } catch (err) {
      throw new Error(err)
    }
  },
  async updateArticle(id: string, newCareer: Article) {
    try {
      const articles = await this.getAllArticles()
      updateJSON(
        articlePath,
        articles.map((article) => (article.id === id ? newCareer : article))
      )
    } catch (err) {
      throw new Error(err)
    }
  },
}

export default Service
