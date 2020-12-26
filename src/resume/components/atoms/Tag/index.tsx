import React from 'react'

import * as S from './styles'

type TagProps = {
  text: string
}
function Tag({ text }: TagProps) {
  return <S.Wrapper>{text}</S.Wrapper>
}

export default Tag
