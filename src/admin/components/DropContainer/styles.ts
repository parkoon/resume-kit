import styled, { css } from 'styled-components'
import { palette } from '@Shared/styles'

export const Container = styled.div`
  h2 {
    font-weight: bold;
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
`
export const Wrapper = styled.div<{ dashed?: boolean; hovered?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background: ${palette.grey[300]};
  min-height: 4rem;
  padding: 1rem;
  border-radius: 4px;
  border: 3px solid ${palette.grey[300]};
  transition: 0.3s;

  ${({ dashed }) =>
    dashed &&
    css`
      border: 3px dashed ${palette.blue[200]};

      &::after {
        content: '';
        transition: 0.3s;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: ${palette.blue[50]};
      }
    `}
  ${({ hovered }) =>
    hovered &&
    css`
      border: 3px dashed ${palette.green[200]};
      &::after {
        background: ${palette.green[50]};
      }
    `}
`
