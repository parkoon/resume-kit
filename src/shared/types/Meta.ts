export type Meta = {
  title: string
  description: string
  image: string
  keywords: string[]
  primaryColor: string
  homepage: string
}

export type OGImage = {
  title: string
  subtitle: string
}

export type MetaJSON = {
  data: Meta
  updatedAt: string
}
