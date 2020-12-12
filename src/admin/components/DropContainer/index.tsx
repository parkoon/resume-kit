import { Container, Wrapper } from './styles'

interface DragContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  title: string
  dashed?: boolean
  hovered?: boolean
}
function DragContainer({ children, title, dashed, hovered, ...props }: DragContainerProps) {
  return (
    <Container {...props}>
      <h2>{title}</h2>

      <Wrapper dashed={dashed} hovered={hovered}>
        {children}
      </Wrapper>
    </Container>
  )
}

export default DragContainer
