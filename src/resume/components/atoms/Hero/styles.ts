import styled from 'styled-components'

export const Wrapper = styled.div``
export const Image = styled.div<{ url: string }>`
  width: 240px;
  height: 320px;
  background-image: url(${({ url }) => url});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 4px;
`
