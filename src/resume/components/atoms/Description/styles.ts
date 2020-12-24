import styled, { css } from 'styled-components'

export const Wrapper = styled.div<{ gutter?: number }>`
  display: flex;

  ${({ gutter }) =>
    gutter &&
    css`
      margin-bottom: ${gutter}px;
    `}
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-basis: 180px;
  margin-right: 40px;
`
export const Right = styled.div`
  flex: 1;
`
