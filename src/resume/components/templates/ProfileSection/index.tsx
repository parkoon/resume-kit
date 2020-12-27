import React from 'react'

import Space from '@Resume/components/atoms/Space'
import ProfileInfo from '@Resume/components/molecules/ProfileInfo'
import { usePayload } from '@Resume/context/PayloadContext'
import withEnabled from '@Resume/hoc/withEnabled'

type ProfileSectionProps = {
  sort: number
}
function ProfileSection(props: ProfileSectionProps) {
  return (
    <Space section>
      <ProfileInfo />
    </Space>
  )
}

export default withEnabled('profile', ProfileSection)
