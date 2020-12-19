import styled from 'styled-components'
import { palette } from '@Shared/styles'

export const Wrapper = styled.div`
  display: flex;
`

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  input {
    font-size: 1.8rem;
  }
`

export const ButtonWrapper = styled.div`
  right: 0;
  bottom: -38px;
  position: absolute;

  button:first-child {
    margin-right: 7px;
  }
`

export const IconWrapper = styled.div`
  font-size: 2rem;
  margin-right: 1rem;
`
