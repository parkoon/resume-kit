import React from 'react'
import styled, { css } from 'styled-components'

// Types
type TitleProps = {
  children: React.ReactNode
  level?: 1 | 2 | 3 | 4
  fontWeight?: 300 | 400 | 500 | 700
  letterSpacing?: number
  style?: React.CSSProperties
}

// Constants
const FONT_SIZE: { [key: string]: string } = {
  h1: '2.4rem',
  h2: '2rem',
  h3: '1.8rem',
  h4: '1.6rem',
}

// Functions
const fontSize = ({ level = 1 }: TitleProps) => FONT_SIZE[`h${level}`]

const styles = css`
  font-size: ${fontSize};
  font-weight: ${({ fontWeight = 500 }) => fontWeight};
  letter-spacing: ${({ letterSpacing = 1 }) => `${letterSpacing}px`};
`

const Title = styled(({ level, children, ...props }: TitleProps) =>
  React.createElement(`h${level}`, props, children)
)`
  ${styles}
`

export default Title
