import type { AppProps } from 'next/app'
import { GlobalStyle } from '@Shared/styles'
import Theme from '@Shared/theme/Theme'

function ResumeApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <GlobalStyle />
      <Component {...pageProps} />
    </Theme>
  )
}

export default ResumeApp
