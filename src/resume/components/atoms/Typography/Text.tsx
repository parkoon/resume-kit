import React from 'react'
import styled, { css } from 'styled-components'
import { palette } from '@Shared/styles'

const FONT_SIZE = {
  sm: '1.0rem',
  md: '1.2rem',
  lg: '1.3rem',
  xl: '1.7rem',
}

const fontSize = ({ size }: Partial<TextProps>) => FONT_SIZE[size!]

const Wrapper = styled.span<Partial<TextProps>>`
  display: ${({ block }) => (block ? 'block' : 'inline')};
  font-size: ${fontSize};

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}

  ${({ italic }) =>
    italic &&
    css`
      font-style: italic;
      color: ${palette.grey[600]};
      font-size: ${FONT_SIZE.lg};
      font-weight: 300;
    `}
`

type TextProps = {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: string
  block?: boolean
  style?: React.CSSProperties
  italic?: boolean
}
function Text({ children, ...props }: TextProps) {
  return <Wrapper {...props}>{children}</Wrapper>
}

Text.defaultProps = {
  size: 'md',
}

export default Text
