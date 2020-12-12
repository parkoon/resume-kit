import styled from 'styled-components'
import { levelColor, palette } from '@Shared/styles'

export const Wrapper = styled.div`
  background: ${palette.white};
  border-radius: 4px;
  display: flex;
  align-items: center;
  margin-right: 7px;
  margin-bottom: 7px;
  padding: 0.7rem 1rem;
  cursor: move;
  transition: 0.3s;

  &:hover {
    background: ${palette.grey[200]};
  }
`

export const Title = styled.span`
  font-size: 1.6rem;
`
export const Level = styled.div<{ type: 'low' | 'mid' | 'high' }>`
  color: #fff;
  border-radius: 50%;
  width: 1.8rem;
  height: 1.8rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.7rem;
  cursor: pointer;
  background: ${({ type }) => levelColor[type]};
`
