import React from 'react'

import Description from '@Resume/components/atoms/Description'
import Hero from '@Resume/components/atoms/Hero'
import Space from '@Resume/components/atoms/Space'
import Text from '@Resume/components/atoms/Typography/Text'
import Title from '@Resume/components/atoms/Typography/Title'
import { usePayload } from '@Resume/context/PayloadContext'
import withEnabled from '@Resume/hoc/withEnabled'

type IntroduceSectionProps = {
  sort: number
}
function IntroduceSection(props: IntroduceSectionProps) {
  const {
    profile: { data },
  } = usePayload()

  return (
    <Space section>
      <Title level={3} section>
        ABOUT ME
      </Title>
      {/* TODO. 이미지 업로드 및 활성화/비활성화 기능 구현 후 추가 */}
      <Description /*left={<Hero url="/avatar.png" />} */ right={<Text>{data.about}</Text>} />
    </Space>
  )
}

export default withEnabled('profile', IntroduceSection)
