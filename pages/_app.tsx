import type { AppProps } from 'next/app'
import { ResumeGlobalStyle, AdminGlobalStyle } from '@Shared/styles'

function ResumeApp({ Component, pageProps }: AppProps) {
  const resumeStylePage = ['Preview', 'Resume']
  return (
    <>
      {resumeStylePage.includes(Component.displayName || '') ? (
        <ResumeGlobalStyle />
      ) : (
        <AdminGlobalStyle />
      )}
      <Component {...pageProps} />
    </>
  )
}

export default ResumeApp
