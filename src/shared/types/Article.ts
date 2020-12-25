export type Article = {
  id: string
  title: string
  url: string
}
export type ArticleJSON = {
  data: Article[]
  updatedAt: string
}
