import React from 'react'

import Description from '@Resume/components/atoms/Description'
import Hero from '@Resume/components/atoms/Hero'
import Space from '@Resume/components/atoms/Space'
import Text from '@Resume/components/atoms/Typography/Text'
import Title from '@Resume/components/atoms/Typography/Title'
import { usePayload } from '@Resume/context/PayloadContext'

function IntroduceSection() {
  const {
    profile: { data },
  } = usePayload()

  return (
    <Space section>
      <Title level={3} section>
        ABOUT ME
      </Title>

      <Description left={<Hero url="/avatar.png" />} right={<Text>{data.about}</Text>} />
    </Space>
  )
}

export default IntroduceSection
