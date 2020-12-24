import styled from 'styled-components'
import { palette } from '@Shared/styles'

export const Wrapper = styled.div`
  margin-left: 16px;
`

export const List = styled.div<{ column: number }>`
  display: grid;
  grid-template-columns: ${({ column }) => `repeat(${column - 1}, minmax(250px, auto)) 1fr`};
  grid-column-gap: 17px;
`
export const Item = styled.div`
  position: relative;
  padding-left: 17px;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 8px;
    height: 8px;
    background: ${palette.grey[900]};
    transform: translateY(-20%) rotate(45deg);
  }
`
