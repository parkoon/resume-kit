import React from 'react'
import { Empty } from 'antd'
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
  const hasData = totalCount > 0
  return (
    <Container {...props}>
      <h2>
        {title}
        <span>({totalCount})</span>
      </h2>

      <Wrapper dashed={dashed} hovered={hovered} empty={!hasData}>
        {hasData ? <>{children}</> : <Empty description="" />}
      </Wrapper>
    </Container>
  )
}

export default DragContainer
