import React from 'react'
import Description from '@Resume/components/atoms/Description'
import Title from '@Resume/components/atoms/Typography/Title'
import styled from 'styled-components'
import Space from '@Resume/components/atoms/Space'

function IntroduceSection() {
  return (
    <Space bottom={32}>
      <Description
        left={
          <Title level={2} letterSpacing={2}>
            OBJECTIVE
          </Title>
        }
        right="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim viverra nibh sed varius. Proin bibendum nunc in sem ultrices posuere. Aliquam ut aliquam lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim viverra nibh sed varius. Proin bibendum nunc in sem ultrices posuere. Aliquam ut aliquam lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim viverra nibh sed varius. Proin bibendum nunc in sem ultrices posuere. Aliquam ut aliquam lacus. "
      />
    </Space>
  )
}

export default IntroduceSection
