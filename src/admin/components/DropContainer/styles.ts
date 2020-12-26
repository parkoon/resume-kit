import styled, { css } from 'styled-components'
import { palette } from '@Shared/styles'

export const Container = styled.div`
  h2 {
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 0.5rem;

    span {
      display: inline-block;
      margin-left: 0.5rem;
      font-size: 1.5rem;
      color: ${palette.grey[600]};
    }
  }
`
export const Wrapper = styled.div<{ dashed?: boolean; hovered?: boolean; empty?: boolean }>`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-template-rows: 48px;
  grid-gap: 7px;
  padding: 5px;
  background: ${palette.grey[300]};
  border-radius: 4px;
  border: 3px solid ${palette.grey[300]};
  transition: 0.3s;
  height: 100%;

  ${({ empty }) =>
    empty &&
    css`
      align-items: center;
    `}

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
