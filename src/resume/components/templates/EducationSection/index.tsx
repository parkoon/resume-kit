import React from 'react'

import Description from '@Resume/components/atoms/Description'
import Title from '@Resume/components/atoms/Typography/Title'
import Text from '@Resume/components/atoms/Typography/Text'
import Space from '@Resume/components/atoms/Space'
import { usePayload } from '@Resume/context/PayloadContext'
import withEnabled from '@Resume/hoc/withEnabled'
import { sortByStartedAt, periodify } from '@Shared/helpers'
import { Education } from '@Shared/types/Education'

type EducationSectionProps = {
  sort: number
}
function EducationSection(props: EducationSectionProps) {
  const {
    education: { data },
  } = usePayload()

  return (
    <Space section>
      <Title level={3} section>
        EDUCATION
      </Title>

      {sortByStartedAt<Education[]>(data).map(({ id, title, subtitle, startedAt, endedAt }) => (
        <Description
          key={id}
          left={<Text size="xl">{periodify(startedAt, endedAt)}</Text>}
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

export default withEnabled('education', EducationSection)
