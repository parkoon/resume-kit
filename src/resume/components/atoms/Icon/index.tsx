import React from 'react'
import {
  FaYoutube,
  FaEnvelope,
  FaTwitter,
  FaPhone,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaBlog,
  FaHome,
  FaGithub,
  FaFacebook,
} from 'react-icons/fa'

import * as S from './styles'
const ICON: { [key: string]: React.ReactNode } = {
  phone: <FaPhone />,
  blog: <FaBlog />,
  homepage: <FaHome />,
  github: <FaGithub />,
  linkedin: <FaLinkedinIn />,
  email: <FaEnvelope />,
  facebook: <FaFacebook />,
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
}
function Icon({ name, text }: IconProps) {
  const IconEl = ICON[name]
  return (
    <S.Wrapper>
      <S.IconWrapper>{IconEl}</S.IconWrapper>
      <span>{text}</span>
    </S.Wrapper>
  )
}

export default Icon
