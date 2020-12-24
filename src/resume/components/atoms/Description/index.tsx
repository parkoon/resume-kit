import React from 'react'

import * as S from './styles'

type DescriptionProps = {
  title: React.ReactNode | string
  content: React.ReactNode
  gutter?: number
}
function Description({ title, content, gutter }: DescriptionProps) {
  return (
    <S.Wrapper gutter={gutter}>
      <S.Left>{title}</S.Left>
      <S.Right>{content}</S.Right>
    </S.Wrapper>
  )
}

export default Description
