import {
  FacebookFilled,
  GithubFilled,
  HomeFilled,
  InstagramFilled,
  LinkedinFilled,
  MailFilled,
  MessageFilled,
  PhoneFilled,
  SnippetsFilled,
  ToolFilled,
  TwitterCircleFilled,
  UserOutlined,
  YoutubeFilled,
} from '@ant-design/icons'
import { ProfileSection } from '@Shared/types/Profile'

export type profileSection = {
  name: ProfileSection
  icon: React.ReactNode
  placeholder: string
}

export const PROFILE_SECTIONS: { [key: string]: profileSection[] } = {
  default: [
    {
      name: 'name',
      icon: <UserOutlined />,
      placeholder: '이름',
    },
    {
      name: 'position',
      icon: <ToolFilled />,
      placeholder: '분야 (ex, 프론트엔드 개발자)',
    },
  ],
  contact: [
    {
      name: 'email',
      icon: <MailFilled />,
      placeholder: '이메일',
    },
    {
      name: 'phone',
      icon: <PhoneFilled />,
      placeholder: '핸드폰번호',
    },
  ],
  social: [
    {
      name: 'github',
      icon: <GithubFilled />,
      placeholder: '깃허브',
    },
    {
      name: 'linkedin',
      icon: <LinkedinFilled />,
      placeholder: '링크드인',
    },
    {
      name: 'facebook',
      icon: <FacebookFilled />,
      placeholder: '페이스북',
    },
    {
      name: 'youtube',
      icon: <YoutubeFilled />,
      placeholder: '유튜브',
    },
    {
      name: 'instagram',
      icon: <InstagramFilled />,
      placeholder: '인스타그램',
    },
    {
      name: 'twitter',
      icon: <TwitterCircleFilled />,
      placeholder: '트위터',
    },
  ],
  more: [
    {
      name: 'about',
      icon: <MessageFilled />,
      placeholder: '자기소개',
    },
    {
      name: 'blog',
      icon: <SnippetsFilled />,
      placeholder: '블로그',
    },

    {
      name: 'homepage',
      icon: <HomeFilled />,
      placeholder: '홈페이지',
    },
  ],
}
