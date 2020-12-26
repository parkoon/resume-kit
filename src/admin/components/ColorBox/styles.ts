import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  span {
  }
`
export const Box = styled.div<{ color: string }>`
  width: 14px;
  height: 14px;
  background: ${({ color }) => color};
  margin-right: 7px;
  flex-shrink: 0;
`
