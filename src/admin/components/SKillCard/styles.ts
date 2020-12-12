import styled from 'styled-components'
import { levelColor } from '@Shared/styles'

export const Wrapper = styled.div`
  background: #fff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  margin-right: 7px;
  margin-bottom: 7px;
  padding: 0.7rem 1rem;
  cursor: move;
  transition: 0.3s;

  &:hover {
    background: #ebecf0;
  }
`

export const Title = styled.span`
  font-size: 1.6rem;
`
export const Level = styled.div<{ type: 'low' | 'mid' | 'high' }>`
  color: #fff;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.7rem;
  cursor: pointer;
  transition: 0.3s;
  background: ${({ type }) => levelColor[type]};

  &:hover {
    opacity: 0.5;
  }
`
