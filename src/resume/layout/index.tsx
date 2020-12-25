import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  padding: 16px 0;
  &::before,
  &::after {
    content: '';
    width: 100%;
    height: 16px;
    background: ${({ theme }) => theme.primaryColor};
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
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  )
}

export default ResumeLayout
