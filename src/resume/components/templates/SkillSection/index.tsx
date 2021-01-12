import React from 'react'

import Title from '@Resume/components/atoms/Typography/Title'
import Text from '@Resume/components/atoms/Typography/Text'
import Space from '@Resume/components/atoms/Space'
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

      {skills.map((skill, index) => {
        const canRender = skill.values.length > 0 && skill.position

        if (!canRender) return null
        return (
          <div
            key={`${skill}#${index}`}
            style={{ marginBottom: skills.length - 1 === index ? 0 : 14 }}
          >
            <Title level={5}>{fUppercase(skill.position)}</Title>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {skill.values.map((value, index) => (
                <Text key={`${value}#${index}`} style={{ marginRight: 7 }}>
                  {value}
                  {index !== skill.values.length - 1 && <span>,</span>}
                </Text>
              ))}
            </div>
          </div>
        )
      })}
    </Space>
  )
}

export default withEnabled('skill', SkillSection)
