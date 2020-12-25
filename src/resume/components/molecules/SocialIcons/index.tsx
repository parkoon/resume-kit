import React from 'react'
import {
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaFacebookF,
  FaBlog,
  FaHome,
} from 'react-icons/fa'

import * as S from './styles'

const ICON: { [key: string]: React.ReactNode } = {
  github: <FaGithub className="icon" />,
  linkedin: <FaLinkedinIn className="icon" />,
  facebook: <FaFacebookF className="icon" />,
  twitter: <FaTwitter className="icon" />,
  instagram: <FaInstagram className="icon" />,
  youtube: <FaYoutube className="icon" />,
  blog: <FaBlog className="icon" />,
  homepage: <FaHome className="icon" />,
}
type IconName =
  | 'github'
  | 'linkedin'
  | 'facebook'
  | 'twitter'
  | 'instagram'
  | 'youtube'
  | 'blog'
  | 'homepage'

type SocialIconProps = {
  name: IconName
  onClick(): void
}
function SocialIcon({ name, onClick }: SocialIconProps) {
  const IconEl = ICON[name]
  return <S.IconWrapper onClick={onClick}>{IconEl}</S.IconWrapper>
}
type SocialIconsProps = {
  icons: {
    github?: string
    facebook?: string
    instagram?: string
    twitter?: string
    linkedin?: string
    youtube?: string
    blog?: string
    homepage?: string
  }
}
function SocialIcons({ icons }: SocialIconsProps) {
  return (
    <S.IconsWrapper>
      {Object.keys(icons).map((key) => (
        <SocialIcon name={key as IconName} onClick={() => window.open(icons[key as IconName])} />
      ))}
    </S.IconsWrapper>
  )
}

export default SocialIcons
