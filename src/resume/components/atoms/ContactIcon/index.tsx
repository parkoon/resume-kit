import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

import * as S from './styles'

const ICON: { [key: string]: React.ReactNode } = {
  phone: <FaPhone />,
  email: <FaEnvelope />,
}
type IconName = 'phone' | 'email'
type IconProps = {
  name: IconName
  text: string
  className?: string
}
function ContactIcon({ name, text, ...props }: IconProps) {
  const IconEl = ICON[name]
  return (
    <S.Wrapper {...props}>
      <S.IconWrapper>{IconEl}</S.IconWrapper>
      <span>{text}</span>
    </S.Wrapper>
  )
}

export default ContactIcon
