import React from 'react'

import * as S from './styles'

type DescriptionProps = {
  left: React.ReactNode | string
  right: React.ReactNode
  gutter?: number
  style?: React.CSSProperties
}
function Description({ left, right, ...props }: DescriptionProps) {
  return (
    <S.Wrapper {...props}>
      <S.Left>{left}</S.Left>
      <S.Right>{right}</S.Right>
    </S.Wrapper>
  )
}

Description.defaultProps = {
  gutter: 62,
}

export default Description
