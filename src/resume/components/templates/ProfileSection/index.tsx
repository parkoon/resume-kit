import React from 'react'
import Description from '@Resume/components/atoms/Description'
import Hero from '@Resume/components/atoms/Hero'
import ProfileInfo from '@Resume/components/molecules/ProfileInfo'
import styled from 'styled-components'
import Space from '@Resume/components/atoms/Space'
import SocialIcons from '@Resume/components/molecules/SocialIcons'

function ProfileSection() {
  return (
    <Space section>
      <ProfileInfo />

      {/* <Description
        left={<Hero url="https://picsum.photos/id/237/200/300" />}
        right={<ProfileInfo />}
      /> */}
    </Space>
  )
}

export default ProfileSection
