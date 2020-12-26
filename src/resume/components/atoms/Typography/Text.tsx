import React from 'react'
import styled, { css } from 'styled-components'

import { palette } from '@Shared/styles'

const FONT_SIZE = {
  sm: '1rem',
  md: '1.1rem',
  lg: '1.3rem',
  xl: '1.5rem',
}

const fontSize = ({ size }: Partial<TextProps>) => FONT_SIZE[size!]

const Wrapper = styled.span<Partial<TextProps>>`
  display: ${({ block }) => (block ? 'block' : 'inline')};
  font-size: ${fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  word-break: keep-all;
  white-space: pre-wrap;

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
      font-size: ${FONT_SIZE.sm};
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
  fontWeight?: 300 | 400 | 500 | 700
}
function Text({ children, ...props }: TextProps) {
  return <Wrapper {...props}>{children}</Wrapper>
}

Text.defaultProps = {
  size: 'md',
}

export default Text
