import React from 'react'

import Description from '@Resume/components/atoms/Description'
import Title from '@Resume/components/atoms/Typography/Title'
import Text from '@Resume/components/atoms/Typography/Text'
import Space from '@Resume/components/atoms/Space'
import { usePayload } from '@Resume/context/PayloadContext'

function EtcSection() {
  const {
    etc: { data },
  } = usePayload()
  console.log()
  return (
    <Space section>
      <Title level={3} section>
        ETC
      </Title>

      {data.map(({ id, title, subtitle, startedAt, endedAt }) => (
        <Description
          key={id}
          left={
            <Text size="xl">
              {startedAt} ~ {endedAt}
            </Text>
          }
          right={
            <>
              <Text block size="xl">
                {title}
              </Text>
              <Text italic>{subtitle}</Text>
            </>
          }
        />
      ))}
    </Space>
  )
}

export default EtcSection
