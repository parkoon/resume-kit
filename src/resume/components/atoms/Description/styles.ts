import styled, { css } from 'styled-components'
import { palette } from '@Shared/styles'

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
  flex-basis: 240px;
  margin-right: 40px;
  color: ${palette.grey[700]};
`
export const Right = styled.div`
  flex: 1;
`
