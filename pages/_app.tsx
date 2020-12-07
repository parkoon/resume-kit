import 'antd/dist/antd.css'

import type { AppProps } from 'next/app'
import { GlobalStyle } from '@Shared/styles'

function ResumeApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default ResumeApp
