import styled from 'styled-components'

import { palette } from '@Shared/styles'

export const IconsWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`
export const IconWrapper = styled.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin-left: 7px;

  .icon {
    position: absolute;
    top: 16px;
    left: 16px;
    transition: 0.25s ease-in;
    font-size: 1.4rem;
    color: ${palette.white};
  }

  &::before {
    content: ' ';
    display: block;
    width: 52px;
    height: 52px;
    border-radius: 100%;
    background: linear-gradient(45deg, ${palette.grey[900]}, ${palette.grey[600]});
    transition: 0.25s ease-out;
  }

  &:hover::before {
    transform: scale(0);
    transition: 0.25s ease-in;
  }

  &:hover .icon {
    transform: scale(1.5);
    transition: 0.25s ease-in;
    color: ${palette.grey[800]};
  }
`
