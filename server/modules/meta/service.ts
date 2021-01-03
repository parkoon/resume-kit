import jsonfile from 'jsonfile'
import { createCanvas } from 'canvas'
import path from 'path'
import fs from 'fs'

import { updateJSON, readJSON } from '@Server/helpers/JSONTool'
import { metaPath, rootPath, packagePath } from '@Server/paths'
import { Meta, OGImage, MetaJSON } from '@Shared/types/Meta'

const Service = {
  async getMeta() {
    try {
      const { data } = readJSON<MetaJSON>(metaPath)
      return data
    } catch (err) {
      throw Error(err)
    }
  },
  async updateMeta(meta: Meta) {
    try {
      updateJSON(metaPath, meta)
    } catch (err) {
      throw Error(err)
    }
  },

  async validateMeta() {
    try {
      const meta = await this.getMeta()
      return Boolean(
        meta.title &&
          meta.description &&
          meta.image &&
          Boolean(meta.keywords.length) &&
          meta.homepage
      )
    } catch (err) {
      throw Error(err)
    }
  },

  async updateHomepageInPackage({ homepage }: { homepage: string }) {
    const packageJSON = jsonfile.readFileSync(packagePath)
    jsonfile.writeFileSync(packagePath, { ...packageJSON, homepage }, { spaces: 2 })
  },

  async createImage({ title, subtitle }: OGImage) {
    try {
      const width = 1200
      const height = 630

      const canvas = createCanvas(width, height)
      const context = canvas.getContext('2d')

      context.fillStyle = '#000'
      context.fillRect(0, 0, width, height)

      context.font = 'bold 70pt Menlo'
      context.textAlign = 'center'
      context.textBaseline = 'top'
      context.fillStyle = '#3574d4'

      const textWidth = context.measureText(title).width
      context.fillRect(600 - textWidth / 2 - 10, 170 - 5, textWidth + 20, 120)
      context.fillStyle = '#fff'
      context.fillText(title, 600, 170)

      context.fillStyle = '#fff'
      context.font = 'bold 30pt Menlo'
      context.fillText(subtitle, 600, 530)

      const buffer = canvas.toBuffer('image/png')
      fs.writeFileSync(path.join(rootPath, 'public/og.png'), buffer)

      return 'og.png'
    } catch (err) {
      throw Error(err)
    }
  },
}

export default Service
