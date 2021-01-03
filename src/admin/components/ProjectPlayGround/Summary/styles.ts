import styled, { css } from 'styled-components'
import { palette } from '@Shared/styles'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: ${palette.white};
  padding: 8px;
  width: 286px;
`

export const Body = styled.div`
  position: relative;

  border: 1px solid ${palette.grey[200]};

  height: calc(100vh - 120px);
  overflow: auto;
`

export const Item = styled.div<{ selected?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: ${palette.grey[100]};
  border-bottom: 1px solid ${palette.grey[300]};
  padding: 12px;
  cursor: pointer;
  transition: 0.2s;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 7px;
    word-break: keep-all;
  }
  span.where {
    font-weight: bold;
    color: ${palette.grey[800]};
  }

  &:hover {
    background-color: ${palette.grey[200]};
  }

  ${({ selected }) =>
    selected &&
    css`
      background: ${palette.blue[100]};
      h3,
      span {
        color: ${palette.indigo[700]};
      }

      &:hover {
        background: ${palette.blue[100]};
      }
    `}
`

export const Footer = styled.div`
  padding: 12px 0px 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`
