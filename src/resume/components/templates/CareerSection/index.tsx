import React from 'react'

import Description from '@Resume/components/atoms/Description'
import Title from '@Resume/components/atoms/Typography/Title'
import Text from '@Resume/components/atoms/Typography/Text'
import Space from '@Resume/components/atoms/Space'
import { usePayload } from '@Resume/context/PayloadContext'
import withEnabled from '@Resume/hoc/withEnabled'
import { sortByStartedAt, periodify } from '@Shared/helpers'
import { Career } from '@Shared/types/Career'

type CareerSectionProps = {
  sort: number
}
function CareerSection(props: CareerSectionProps) {
  const {
    career: { data },
  } = usePayload()

  return (
    <Space section>
      <Title level={3} section secondary>
        CAREER
      </Title>

      {/* TODO. 회사에서 무슨 업무를 했는지 */}
      {sortByStartedAt<Career[]>(data, -1).map(({ id, title, subtitle, startedAt, endedAt }) => (
        <Description
          key={id}
          left={<Text size="xl">{periodify(startedAt, endedAt)}</Text>}
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

export default withEnabled('career', CareerSection)
