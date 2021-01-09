import React from 'react'

import Description from '@Resume/components/atoms/Description'
import Title from '@Resume/components/atoms/Typography/Title'
import Text from '@Resume/components/atoms/Typography/Text'
import Space from '@Resume/components/atoms/Space'
import List from '@Resume/components/atoms/List'
import { usePayload } from '@Resume/context/PayloadContext'
import { fUppercase } from '@Shared/helpers'
import withEnabled from '@Resume/hoc/withEnabled'

type SkillSectionProps = {
  sort: number
}
function SkillSection(props: SkillSectionProps) {
  const {
    skill: { data: skills },
  } = usePayload()

  return (
    <Space section>
      <Title level={3} section>
        SKILL
      </Title>

      {skills.map((skill) => {
        const canRender = skill.values.length > 0 && skill.position

        if (!canRender) return null
        return (
          <Description
            key={skill.id}
            left={<Text size="xl">{fUppercase(skill.position)}</Text>}
            right={<List column={1} items={skill.values} margin={false} />}
          />
        )
      })}
    </Space>
  )
}

export default withEnabled('skill', SkillSection)
