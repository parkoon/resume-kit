import React from 'react'

import Description from '@Resume/components/atoms/Description'
import Title from '@Resume/components/atoms/Typography/Title'
import Text from '@Resume/components/atoms/Typography/Text'
import Space from '@Resume/components/atoms/Space'
import List from '@Resume/components/atoms/List'
import { usePayload } from '@Resume/context/PayloadContext'
import { Skill } from '@Shared/types/Skill'
import { fUppercase } from '@Shared/helpers'

function SkillSection() {
  const {
    skill: { data },
  } = usePayload()

  const validSkills = data.reduce<{ [key: string]: Skill[] }>((prev, skill) => {
    if (skill.type === 'none') return prev

    prev[skill.type] = prev[skill.type] || []
    prev[skill.type].push(skill)

    return prev
  }, {})

  return (
    <Space section>
      <Title level={3} section>
        SKILL
      </Title>

      {Object.keys(validSkills).map((key) => (
        <Description
          key={key}
          left={<Text size="xl">{fUppercase(key)}</Text>}
          right={<List column={3} items={validSkills[key].map((skill) => skill.title)} />}
        />
      ))}
    </Space>
  )
}

export default SkillSection
