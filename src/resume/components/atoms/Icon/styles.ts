import styled from 'styled-components'
import { palette } from '@Shared/styles'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 1.2rem;
    line-height: 1rem;
  }
`
export const IconWrapper = styled.div`
  width: 27px;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #fff;
  background: ${palette.grey[800]};
  margin-right: 7px;
  font-size: 1rem;
`
