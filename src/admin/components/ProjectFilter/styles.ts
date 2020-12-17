import styled, { css } from 'styled-components'
import { palette } from '@Shared/styles'

export const Wrapper = styled.div`
  /* background: red; */
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`

export const Item = styled.div<{ selected?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  margin-right: 0.4rem;
  margin-bottom: 0.4rem;
  /* min-width: 10rem; */
  background: ${palette.white};
  border: 1px solid ${palette.grey[700]};
  cursor: pointer;
  transition: 0.3s;

  ${({ selected }) =>
    selected &&
    css`
      background: ${palette.teal[100]};
      border: 1px solid ${palette.teal[700]};
      color: ${palette.teal[700]};
    `}
`
