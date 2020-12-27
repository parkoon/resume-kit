import styled from 'styled-components'
import { palette } from '@Shared/styles'

export const Wrapper = styled.div`
  position: fixed;
  bottom: 32px;
  right: 32px;
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 2.5rem;
  width: 52px;
  height: 52px;
  border-radius: 100%;
  background: linear-gradient(45deg, ${palette.grey[700]}, ${palette.grey[500]});
  color: ${palette.white};
`

export const Iframe = styled.iframe`
  height: 100%;
  width: 100%;
`
