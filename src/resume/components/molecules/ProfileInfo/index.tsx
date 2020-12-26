import React from 'react'

import Title from '@Resume/components/atoms/Typography/Title'
import Icon from '@Resume/components/atoms/ContactIcon'
import Space from '@Resume/components/atoms/Space'

import { usePayload } from '@Resume/context/PayloadContext'
import { phoneFormat } from '@Shared/helpers'

import SocialIcons from '../SocialIcons'

function ProfileInfo() {
  const {
    profile: { data },
  } = usePayload()

  const {
    name,
    position,
    github,
    twitter,
    facebook,
    instagram,
    youtube,
    linkedin,
    blog,
    homepage,
    phone,
    email,
  } = data

  const icons: { [key: string]: string } = {
    github,
    twitter,
    facebook,
    blog,
    homepage,
    instagram,
    youtube,
    linkedin,
  }

  // 빈 값인 필드 삭제
  Object.keys(icons).forEach((key) => !icons[key] && delete icons[key])

  return (
    <>
      <Title primary>{name}</Title>
      <Title level={2} fontWeight={300} style={{ marginTop: -7 }}>
        {position}
      </Title>

      <SocialIcons icons={icons} />

      <Space top={20}>
        <Icon name="phone" text={phoneFormat(phone)} />
        <Icon name="email" text={email} />
      </Space>
    </>
  )
}

export default ProfileInfo
