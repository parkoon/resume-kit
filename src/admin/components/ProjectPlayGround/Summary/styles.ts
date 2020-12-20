import styled from 'styled-components'
import { palette } from '@Shared/styles'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: ${palette.grey[300]};
  padding: 8px;
  width: 256px;
`

export const Body = styled.div`
  position: relative;
  h3 {
    font-size: 1.5rem;
    word-break: keep-all;
  }

  span {
    font-weight: bold;
    color: ${palette.grey[800]};
  }
  height: calc(100vh - 220px);
  overflow: auto;
`

export const Item = styled.div`
  background-color: ${palette.grey[100]};
  border: 1px solid ${palette.grey[300]};
  margin-bottom: -1px;
  padding: 12px;
  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background-color: ${palette.grey[200]};
  }
`

export const Footer = styled.div`
  padding: 12px 0px 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`
