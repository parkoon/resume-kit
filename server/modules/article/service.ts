import jsonfile from 'jsonfile'
import { articlePath } from '../../paths'

const Service = {
  async getArticle() {
    try {
      const article = jsonfile.readFileSync(articlePath)
      console.log(article)
    } catch (err) {
      throw new Error(err)
    }
  },
  async saveArticle() {},
}

export default Service
