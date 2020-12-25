import React from 'react'
import Description from '@Resume/components/atoms/Description'
import Title from '@Resume/components/atoms/Typography/Title'
import styled from 'styled-components'
import Space from '@Resume/components/atoms/Space'
import Hero from '@Resume/components/atoms/Hero'
import Text from '@Resume/components/atoms/Typography/Text'

function IntroduceSection() {
  return (
    <Space section>
      <Title section>ABOUT ME</Title>

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
