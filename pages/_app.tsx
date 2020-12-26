import type { AppProps } from 'next/app'
import { ResumeGlobalStyle, AdminGlobalStyle } from '@Shared/styles'

function ResumeApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {Component.displayName === 'Resume' ? <ResumeGlobalStyle /> : <AdminGlobalStyle />}
      <Component {...pageProps} />
    </>
  )
}

export default ResumeApp
