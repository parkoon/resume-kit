import styled from 'styled-components'
import { palette } from '@Shared/styles'

export const TaskWrapper = styled.div`
  overflow: auto;
  margin-top: 10px;
`
export const List = styled.div`
  border-bottom: 1px solid ${palette.grey[300]};
  padding-bottom: 4px;
  margin-bottom: 10px;
`
export const Action = styled.span`
  color: ${palette.grey[900]};
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: ${palette.grey[700]};
  }
  &::after {
    color: ${palette.grey[700]};
    content: '·';
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    width: 16px;
  }
`
export const Title = styled.div`
  margin-bottom: 7px;
`
