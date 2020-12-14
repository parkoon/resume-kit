import styled from 'styled-components'
import { palette } from '@Shared/styles'

export const Wrapper = styled.div`
  display: flex;
`
export const TextWrapper = styled.div<{ onlyPlaceholder: boolean }>`
  height: 34px;
  width: 100%;
  padding: 4px 11px;
  font-size: 1.8rem;
  transition: 0.3s;
  color: ${({ onlyPlaceholder }) => (onlyPlaceholder ? palette.grey[500] : palette.grey[900])};

  &:hover {
    background: ${palette.grey[300]};
  }
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
  margin-right: 0.5rem;
`
