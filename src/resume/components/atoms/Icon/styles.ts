import styled from 'styled-components'
import { palette } from '@Shared/styles'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 1.4rem;
    line-height: 1rem;
  }
`
export const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #fff;
  background: ${palette.grey[800]};
  margin-right: 7px;
`
