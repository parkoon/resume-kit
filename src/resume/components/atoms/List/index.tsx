import React, { Children } from 'react'

import * as S from './styles'
import Text from '../Typography/Text'

type ListProps = {
  children?: React.ReactNode
  column?: number
  items?: string[]
}
function List({ column = 1, items = [], children }: ListProps) {
  if (column > 4) {
    console.warn('column must be less than 4')
  }

  if (children && Boolean(items.length)) {
    console.warn('cannot use children and items prop at the same time')
  }
  return (
    <S.Wrapper>
      <S.List column={column}>
        {children
          ? React.Children.map(children, (child, index) => (
              <S.Item>
                <Text key={index}>{child}</Text>
              </S.Item>
            ))
          : items.map((item, index) => (
              <S.Item>
                <Text key={index}>{item}</Text>
              </S.Item>
            ))}
      </S.List>
    </S.Wrapper>
  )
}

export default List
