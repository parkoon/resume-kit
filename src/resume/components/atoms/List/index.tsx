import React from 'react'

import * as S from './styles'
import Text from '../Typography/Text'
import Title from '../Typography/Title'

type ListProps = {
  children?: React.ReactNode
  column?: number
  items?: string[]
  title?: string
  margin?: boolean
}
function List({ column = 1, margin = true, items = [], title, children }: ListProps) {
  if (column > 4) {
    console.warn('column must be less than 4')
  }

  if (children && Boolean(items.length)) {
    console.warn('cannot use children and items prop at the same time')
  }
  return (
    <S.Wrapper>
      {title && <Title level={5}>{title}</Title>}
      <S.ItemBox column={column} margin={margin}>
        {children
          ? React.Children.map(children, (child, index) => (
              <S.Item key={index}>
                <Text>{child}</Text>
              </S.Item>
            ))
          : items.map((item, index) => (
              <S.Item key={index}>
                <Text>{item}</Text>
              </S.Item>
            ))}
      </S.ItemBox>
    </S.Wrapper>
  )
}

export default List
