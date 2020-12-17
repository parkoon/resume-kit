import React from 'react'
import { Container, Wrapper } from './styles'

interface DragContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  title: string
  totalCount: number
  dashed?: boolean
  hovered?: boolean
}
function DragContainer({
  children,
  title,
  totalCount,
  dashed,
  hovered,
  ...props
}: DragContainerProps) {
  return (
    <Container {...props}>
      <h2>
        {title}
        <span>({totalCount})</span>
      </h2>

      <Wrapper dashed={dashed} hovered={hovered}>
        {children}
      </Wrapper>
    </Container>
  )
}

export default DragContainer
