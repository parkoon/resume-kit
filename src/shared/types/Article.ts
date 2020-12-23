export type Article = {
  id: string
  title: string
  url: string
}
export type ArticleJSON = {
  articles: Article[]
  updatedAt: string
}
