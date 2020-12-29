import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'

import { usePayload } from '@Resume/context/PayloadContext'

const Wrapper = styled.div`
  position: relative;
  padding: 16px 0;
  &::before,
  &::after {
    content: '';
    width: 100%;
    height: 16px;
    background: ${({ theme }) =>
      `linear-gradient(45deg, ${theme.primaryColor}, ${theme.secondaryColor})`};
    position: absolute;
  }
  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }
`

const Container = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  padding: 62px 20px 32px 20px;

  /*  */
  ${({ theme }) =>
    theme.large`
      max-width: 960px;
    `}
  ${({ theme }) =>
    theme.medium`
      max-width: 720px;
   
    `}
  ${({ theme }) =>
    theme.small`
      max-width: 540px;
    `}
`
type ResumeLayoutProps = {
  children: React.ReactNode
}
function ResumeLayout({ children }: ResumeLayoutProps) {
  const {
    meta: { data },
  } = usePayload()

  const { title, description, keywords, image } = data

  return (
    <Wrapper>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords.join(', ')} />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>
      <a href="https://github.com/parkoon/resume-kit" style={{ position: 'absolute', right: 0 }}>
        <img
          loading="lazy"
          width="149"
          height="149"
          src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149"
          alt="Fork me on GitHub"
        />
      </a>

      <Container>{children}</Container>
    </Wrapper>
  )
}

export default ResumeLayout
