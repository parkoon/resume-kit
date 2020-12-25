import React from 'react'

import Description from '@Resume/components/atoms/Description'
import Title from '@Resume/components/atoms/Typography/Title'
import Text from '@Resume/components/atoms/Typography/Text'
import Space from '@Resume/components/atoms/Space'

function EtcSection() {
  return (
    <Space section>
      <Title level={3} secondary section>
        ETC
      </Title>
      <Description
        left={<Text size="xl">2020. 10 ~ 2020. 11</Text>}
        right={
          <>
            <Text block size="xl">
              Lorem ipsum
            </Text>
            <Text italic>amet consectetur adipisicing elit</Text>
          </>
        }
      />
      <Description
        gutter={0}
        left={<Text size="xl">2020. 10 ~ 2020. 11</Text>}
        right={
          <>
            <Text block size="xl">
              Lorem ipsum
            </Text>
            <Text italic>amet consectetur adipisicing elit</Text>
          </>
        }
      />
    </Space>
  )
}

export default EtcSection
