import React from 'react'
import styled from 'styled-components'
import { palette } from '@Shared/styles'

const Wrapper = styled.div`
  position: relative;
  padding: 16px 0;
  &::before,
  &::after {
    content: '';
    width: 100%;
    height: 16px;
    background: ${palette.grey[700]};
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
  margin: 0 auto;
  padding: 52px 12px 32px 12px;
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
