import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  span {
    font-size: 1.2rem;
    line-height: 1rem;
  }
`
export const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 7px;
  font-size: 1.2rem;

  color: ${({ theme }) => theme.secondaryColor};
`
