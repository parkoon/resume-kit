import React from 'react'
import styled, { css } from 'styled-components'

const Wrapper = styled.div<SpaceProps>`
  position: relative;
  margin-top: ${({ top }) => (top ? `${top}px` : 0)};
  margin-bottom: ${({ bottom }) => (bottom ? `${bottom}px` : 0)};

  ${({ section }) =>
    section &&
    css`
      margin-bottom: 72px;
    `}
`
type SpaceProps = {
  children: React.ReactNode
  bottom?: number
  top?: number
  section?: boolean
}

function Space({ children, ...props }: SpaceProps) {
  return <Wrapper {...props}>{children}</Wrapper>
}

export default Space
