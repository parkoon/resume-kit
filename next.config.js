const withImages = require('next-images')
const { homepage } = require('./package.json')

const { NODE_ENV, APPLY_ASSET_PREFIX } = process.env

module.exports = withImages({
  assetPrefix: (() => {
    // 깃허브 페이지 배포가 아닌 로컬에서 빌드할 땐 prefix를 붙이지 않는다.
    if (APPLY_ASSET_PREFIX === 'no') {
      return ''
    }

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
