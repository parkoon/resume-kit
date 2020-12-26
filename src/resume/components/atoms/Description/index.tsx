import React from 'react'

import * as S from './styles'

type DescriptionProps = {
  left?: React.ReactNode | string
  right: React.ReactNode
  gutter?: number
  style?: React.CSSProperties
  divider?: boolean
}
function Description({ left, right, divider, ...props }: DescriptionProps) {
  return (
    <>
      <S.Wrapper {...props}>
        {left && <S.Left>{left}</S.Left>}
        <S.Right>{right}</S.Right>
      </S.Wrapper>
    </>
  )
}

Description.defaultProps = {
  gutter: 62,
}

export default Description
