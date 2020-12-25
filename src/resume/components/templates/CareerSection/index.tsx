import React from 'react'

import Description from '@Resume/components/atoms/Description'
import Title from '@Resume/components/atoms/Typography/Title'
import Text from '@Resume/components/atoms/Typography/Text'
import Space from '@Resume/components/atoms/Space'
import List from '@Resume/components/atoms/List'
import { usePayload } from '@Resume/context/PayloadContext'

function CareerSection() {
  const {
    career: { data },
  } = usePayload()

  return (
    <Space section>
      <Title level={3} section secondary>
        CAREER
      </Title>

      {/* TODO. 회사에서 무슨 업무를 했는지 */}
      {data.map(({ title, subtitle, startedAt, endedAt }) => (
        <Description
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
              {/* <Space top={12}>
                <List
                  items={[
                    'amet consectetur adipisicing elit',
                    'molestias laborum praesentium quaerat consequatur facilis minima.',
                    'Natus in suscipit beatae laudantium! Repudiandae rerum quia',
                    'iste cumque dolore doloribus ipsa tempore libero, ',
                    'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                  ]}
                />
              </Space> */}
            </>
          }
        />
      ))}
    </Space>
  )
}

export default CareerSection
