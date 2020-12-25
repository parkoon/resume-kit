import styled from 'styled-components'

export const Wrapper = styled.div``
export const Image = styled.div<{ url: string }>`
  width: 200px;
  height: 200px;
  background-image: url(${({ url }) => url});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 100%;
`
