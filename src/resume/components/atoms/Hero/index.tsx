import React from 'react'

import * as S from './styles'

type HeroProps = {
  url: string
}
function Hero({ url }: HeroProps) {
  return (
    <S.Wrapper>
      <S.Image url={url} />
    </S.Wrapper>
  )
}

export default Hero
