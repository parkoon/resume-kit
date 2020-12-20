import styled from 'styled-components'

import { palette } from '@Shared/styles'
import { ComponentSize } from '@Admin/types'

export const Text = styled.div<{ onlyPlaceholder: boolean; bold?: boolean; size?: ComponentSize }>`
  min-height: 34px;
  width: 100%;
  padding: 4px 11px;
  font-size: ${({ size }) => (size === 'sm' ? '1.5rem' : size === 'lg' ? '2.4rem' : '1.8rem')};
  transition: 0.3s;
  border-radius: 4px;
  color: ${({ onlyPlaceholder }) => (onlyPlaceholder ? palette.grey[500] : palette.grey[900])};
  white-space: pre-line;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};

  &:hover {
    background: ${palette.grey[300]};
  }
`
