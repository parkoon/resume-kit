import React from 'react'

import Title from '@Resume/components/atoms/Typography/Title'
import Icon from '@Resume/components/atoms/ContactIcon'

import SocialIcons from '../SocialIcons'
import Space from '@Resume/components/atoms/Space'

function ProfileInfo() {
  return (
    <>
      <Title>Jonh Smith</Title>
      <Title level={2} fontWeight={300} style={{ marginTop: 0 }}>
        Frontend Developer
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
        <Icon name="phone" text="010.  0917" />
        <Icon name="email" text="010. 3328. 0917" />
      </Space>
    </>
  )
}

export default ProfileInfo
