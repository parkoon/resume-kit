import React from 'react'
import Description from '@Resume/components/atoms/Description'
import Hero from '@Resume/components/atoms/Hero'
import ProfileInfo from '@Resume/components/molecules/ProfileInfo'
import styled from 'styled-components'
import Space from '@Resume/components/atoms/Space'

function ProfileSection() {
  return (
    <Space bottom={62}>
      <Description
        left={<Hero url="https://picsum.photos/id/237/200/300" />}
        right={<ProfileInfo />}
      />
    </Space>
  )
}

export default ProfileSection
