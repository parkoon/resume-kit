const withImages = require('next-images')
const { homepage } = require('./package.json')

const { NODE_ENV } = process.env

module.exports = withImages({
  assetPrefix: (() => {
    if (NODE_ENV === 'production' && homepage) {
      try {
        const { pathname } = new URL(homepage)
        if (pathname !== '/') {
          return pathname
        }
        return ''
      } catch {
        return ''
      }
    }
    return ''
  })(),
})
