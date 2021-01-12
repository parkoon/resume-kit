import styled, { css } from 'styled-components'
import { palette } from '@Shared/styles'

export const Wrapper = styled.div<{ last?: boolean }>`
  padding-bottom: 32px;
  margin-bottom: 32px;
  border-bottom: 2px dashed ${palette.grey[500]};

  ${({ last }) =>
    last &&
    css`
      padding-bottom: 0;
      margin-bottom: 0;
      border: none;
    `}
`

export const Anchor = styled.a`
  color: ${palette.grey[600]};
`
