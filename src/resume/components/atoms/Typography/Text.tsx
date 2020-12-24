import React from 'react'
import styled, { css } from 'styled-components'

const FONT_SIZE = {
  sm: '1.2rem',
  md: '1.4rem',
  lg: '1.8rem',
}

const fontSize = ({ size }: Partial<TextProps>) => FONT_SIZE[size!]

const Wrapper = styled.span<Partial<TextProps>>`
  font-size: ${fontSize};

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`

type TextProps = {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  color?: string
}
function Text({ children, size = 'md', color }: TextProps) {
  return (
    <Wrapper size={size} color={color}>
      {children}
    </Wrapper>
  )
}

export default Text
