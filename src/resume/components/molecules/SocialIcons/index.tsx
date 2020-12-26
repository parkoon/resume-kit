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

const ICON: { [key: string]: { icon: React.ReactNode; color: string[] } } = {
  github: {
    icon: <FaGithub className="icon" />,
    color: ['#212121', '#616161'],
  },
  linkedin: {
    icon: <FaLinkedinIn className="icon" />,
    color: ['#01579b', '#0288d1'],
  },
  facebook: { icon: <FaFacebookF className="icon" />, color: ['#0d47a1', '#1976d2'] },
  twitter: { icon: <FaTwitter className="icon" />, color: ['#29b6f6', '#4fc3f7'] },
  instagram: { icon: <FaInstagram className="icon" />, color: ['#880e4f', '#c2185b'] },
  youtube: { icon: <FaYoutube className="icon" />, color: ['#bf360c', '#e64a19'] },
  blog: { icon: <FaBlog className="icon" />, color: ['#3e2723', '#5d4037'] },
  homepage: { icon: <FaHome className="icon" />, color: ['#263238', '#455a64'] },
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
  const { icon, color } = ICON[name]
  return (
    <S.IconWrapper color={color as string[] & string} onClick={onClick}>
      {icon}
    </S.IconWrapper>
  )
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
        <SocialIcon
          key={key}
          name={key as IconName}
          onClick={() => window.open(icons[key as IconName])}
        />
      ))}
    </S.IconsWrapper>
  )
}

export default SocialIcons
