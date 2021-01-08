import styled from 'styled-components'
import { palette } from '@Shared/styles'

export const Wrapper = styled.div`
  position: relative;
  height: 160px;
  border: ${palette.dashedLine()};
  cursor: pointer;
  transition: 0.2s;

  &::after,
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 32px;
    height: 1px;
    border-bottom: ${palette.dashedLine()};
    transition: 0.2s;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(90deg);
  }

  &:hover {
    border-color: ${palette.green[300]};

    &::after,
    &::before {
      border-color: ${palette.green[300]};
    }
  }
`
