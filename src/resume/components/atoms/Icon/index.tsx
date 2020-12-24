import React from 'react'
import {
  FaYoutube,
  FaEnvelope,
  FaTwitter,
  FaPhone,
  FaLinkedinIn,
  FaInstagram,
  FaBlog,
  FaHome,
  FaGithub,
  FaFacebookF,
} from 'react-icons/fa'

import * as S from './styles'
const ICON: { [key: string]: React.ReactNode } = {
  phone: <FaPhone />,
  blog: <FaBlog />,
  homepage: <FaHome />,
  github: <FaGithub />,
  linkedin: <FaLinkedinIn />,
  email: <FaEnvelope />,
  facebook: <FaFacebookF />,
  twitter: <FaTwitter />,
  instagram: <FaInstagram />,
  youtube: <FaYoutube />,
}
type IconName =
  | 'phone'
  | 'blog'
  | 'homepage'
  | 'github'
  | 'linkedin'
  | 'email'
  | 'facebook'
  | 'twitter'
  | 'instagram'
  | 'youtube'
type IconProps = {
  name: IconName
  text: string
  className?: string
}
function Icon({ name, text, ...props }: IconProps) {
  const IconEl = ICON[name]
  return (
    <S.Wrapper {...props}>
      <S.IconWrapper>{IconEl}</S.IconWrapper>
      <span>{text}</span>
    </S.Wrapper>
  )
}

export default Icon
