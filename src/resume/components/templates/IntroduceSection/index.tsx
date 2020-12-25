import React from 'react'

import Description from '@Resume/components/atoms/Description'
import Hero from '@Resume/components/atoms/Hero'
import Space from '@Resume/components/atoms/Space'
import Text from '@Resume/components/atoms/Typography/Text'
import Title from '@Resume/components/atoms/Typography/Title'

function IntroduceSection() {
  return (
    <Space section>
      <Title level={3} section secondary>
        ABOUT ME
      </Title>

      <Description
        left={<Hero url="https://picsum.photos/id/237/200/300" />}
        right={
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim viverra nibh
            sed varius. Proin bibendum nunc in sem ultrices posuere. Aliquam ut aliquam lacus. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim viverra nibh sed
            varius. Proin bibendum nunc in sem ultrices posuere. Aliquam ut aliquam lacus. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim viverra nibh sed
            varius. Proin bibendum nunc in sem ultrices posuere. Aliquam ut aliquam lacus.
          </Text>
        }
      />
    </Space>
  )
}

export default IntroduceSection
