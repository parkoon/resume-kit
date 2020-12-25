import React from 'react'

import Title from '@Resume/components/atoms/Typography/Title'
import Icon from '@Resume/components/atoms/ContactIcon'
import Space from '@Resume/components/atoms/Space'

import SocialIcons from '../SocialIcons'
import { usePayload } from '@Resume/context/PayloadContext'

function ProfileInfo() {
  const { profile } = usePayload()
  return (
    <>
      <Title primary>Jonh Smith</Title>
      <Title level={2} fontWeight={300} style={{ marginTop: -10 }}>
        Junior Frontend Developer
      </Title>

      <SocialIcons
        icons={{
          github: 'link',
          twitter: 'link',
          facebook: 'link',
          blog: 'link',
          homepage: 'link',
          instagram: 'link',
          youtube: 'link',
          linkedin: 'link',
        }}
      />

      <Space top={20}>
        <Icon name="phone" text="010. 1234. 5678" />
        <Icon name="email" text="lorem@ipsum.com" />
      </Space>
    </>
  )
}

export default ProfileInfo
