import styled, { css } from 'styled-components'
import { palette } from '@Shared/styles'

export const Wrapper = styled.div<{ gutter?: number }>`
  display: flex;

  ${({ theme }) => theme.medium`
    flex-direction: column;
  `}

  ${({ gutter }) =>
    gutter &&
    css`
      margin-bottom: ${gutter}px;
    `}
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-basis: 240px;
  margin-right: 24px;
  flex-shrink: 0;

  ${({ theme }) => theme.medium`
    align-items: flex-start;
    flex-basis: 0;
    margin-right: 0;
    margin-bottom: 12px;
  `}
`
export const Right = styled.div`
  flex: 1;
`
