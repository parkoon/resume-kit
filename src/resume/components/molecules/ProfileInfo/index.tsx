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

  return (
    <>
      <Title primary>{data.name}</Title>
      <Title level={2} fontWeight={300} style={{ marginTop: -7 }}>
        {data.position}
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
        <Icon name="phone" text={phoneFormat(data.phone)} />
        <Icon name="email" text={data.email} />
      </Space>
    </>
  )
}

export default ProfileInfo
