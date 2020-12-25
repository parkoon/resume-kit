import React from 'react'

import Description from '@Resume/components/atoms/Description'
import Title from '@Resume/components/atoms/Typography/Title'
import Text from '@Resume/components/atoms/Typography/Text'
import Space from '@Resume/components/atoms/Space'
import { usePayload } from '@Resume/context/PayloadContext'

function EducationSection() {
  const {
    education: { data },
  } = usePayload()

  return (
    <Space section>
      <Title level={3} section secondary>
        EDUCATION
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
              <Text size="xl" block>
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

export default EducationSection
