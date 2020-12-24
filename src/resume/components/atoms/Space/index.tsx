import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div<SpaceProps>`
  margin-top: ${({ top }) => (top ? `${top}px` : 0)};
  margin-bottom: ${({ bottom }) => (bottom ? `${bottom}px` : 0)};
`
type SpaceProps = {
  children: React.ReactNode
  bottom?: number
  top?: number
}

function Space({ children, ...props }: SpaceProps) {
  return <Wrapper {...props}>{children}</Wrapper>
}

export default Space
