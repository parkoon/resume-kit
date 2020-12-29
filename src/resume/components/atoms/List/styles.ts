import styled from 'styled-components'
import { palette } from '@Shared/styles'

export const Wrapper = styled.div``

export const ItemBox = styled.div<{ column: number; margin: boolean }>`
  margin-left: ${({ margin }) => (margin ? '24px' : 0)};
  display: grid;
  grid-template-columns: ${({ column }) => `repeat(${column}, minmax(250px, auto))`};
  grid-column-gap: 17px;
  grid-row-gap: 7px;

  ${({ theme }) => theme.medium`
    grid-template-columns: 1fr 1fr;
  `}

  ${({ theme }) => theme.small`
    grid-template-columns: 1fr;
  `}
`
export const Item = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 17px;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 7px;
    height: 7px;
    background: ${({ theme }) => theme.secondaryColor};
    transform: translateY(-20%) rotate(45deg);
  }
`
