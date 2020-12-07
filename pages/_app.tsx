import type { AppProps } from 'next/app'

function ResumeApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default ResumeApp
