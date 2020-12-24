import React from 'react'
import Title from '@Resume/components/atoms/Typography/Title'
import Text from '@Resume/components/atoms/Typography/Text'
import styled from 'styled-components'
import Icon from '@Resume/components/atoms/Icon'

const Icons = styled.div`
  display: grid;
  grid-template-columns: minmax(250px, auto) 1fr;
  margin-top: 24px;
  grid-row-gap: 14px;
`
function ProfileInfo() {
  return (
    <>
      <Title>Jonh Smith</Title>
      <Text block style={{ marginTop: -10 }}>
        Frontend Developer
      </Text>
      <Icons>
        <Icon name="phone" text="010.  0917" />
        <Icon name="facebook" text="010. 3328. 0917" />
        <Icon name="blog" text="010. 3328. 0917" />
        <Icon name="twitter" text="010. 3328. 0917" />
        <Icon name="homepage" text="010. 3328. 0917" />
        <Icon name="email" text="010. 3328. 0917" />
        <Icon name="email" text="010. 3328. 0917" />
        <Icon name="email" text="010. 3328. 0917" />
        <Icon name="email" text="010. 3328. 0917" />
        <Icon name="email" text="010. 3328. 0917" />
      </Icons>
    </>
  )
}

export default ProfileInfo
