import React from 'react'
import { homepage } from 'package.json'

import * as S from './styles'

type HeroProps = {
  url: string
}

const { NODE_ENV } = process.env

function Hero({ url }: HeroProps) {
  const { pathname } = new URL(homepage)
  const realURL = NODE_ENV === 'production' ? `${pathname}/${url}` : url
  return (
    <S.Wrapper>
      <S.Image url={realURL} />
    </S.Wrapper>
  )
}

export default Hero
