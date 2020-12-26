import React from 'react'

import * as S from './styles'

type ColorBoxProps = {
  color: string
}
function ColorBox({ color }: ColorBoxProps) {
  return (
    <S.Wrapper>
      <S.Box color={color} />
      <span>{color}</span>
    </S.Wrapper>
  )
}

export default ColorBox
