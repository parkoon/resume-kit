import React from 'react'

import Description from '@Resume/components/atoms/Description'
import Title from '@Resume/components/atoms/Typography/Title'
import Text from '@Resume/components/atoms/Typography/Text'
import Space from '@Resume/components/atoms/Space'
import { usePayload } from '@Resume/context/PayloadContext'
import withEnabled from '@Resume/hoc/withEnabled'
import { sortByStartedAt, periodify } from '@Shared/helpers'
import { Etc } from '@Shared/types/Etc'

type EtcSectionProps = {
  sort: number
}
function EtcSection(props: EtcSectionProps) {
  const {
    etc: { data },
  } = usePayload()

  return (
    <Space section>
      <Title level={3} section>
        ETC
      </Title>

      {sortByStartedAt<Etc[]>(data).map(({ id, title, subtitle, startedAt, endedAt }) => (
        <Description
          key={id}
          left={<Text size="xl">{periodify(startedAt, endedAt)}</Text>}
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

export default withEnabled('etc', EtcSection)
