import React from 'react'
import Description from '@Resume/components/atoms/Description'
import Title from '@Resume/components/atoms/Typography/Title'
import Text from '@Resume/components/atoms/Typography/Text'
import Space from '@Resume/components/atoms/Space'
import List from '@Resume/components/atoms/List'
import { usePayload } from '@Resume/context/PayloadContext'
import Tag from '@Resume/components/atoms/Tag'

function ProjectSection() {
  const {
    project: { data },
  } = usePayload()

  return (
    <Space section>
      <Title level={3} section secondary>
        PROJECT
      </Title>
      {/* TODO. description */}
      {data.map(({ title, tasks, description, startedAt, skills, endedAt, where }) => (
        <Description
          left={
            <Text size="xl">
              {startedAt} ~ {endedAt}
            </Text>
          }
          right={
            <>
              <Text block fontWeight={500} size="xl">
                {title}
              </Text>
              <Text italic>{where.title}</Text>

              <Space top={12}>
                <Title level={5}>Description</Title>
                <Text block>{description}</Text>
              </Space>
              <Space top={12}>
                <List title="What I did" items={tasks.map((task) => task.title)} />
              </Space>
              <Space top={12}>
                <Title level={5}>Spec Sheet</Title>
                <Space top={7}>
                  {skills.map((skill, index) => (
                    <Tag text={skill} />
                  ))}
                </Space>
              </Space>
            </>
          }
        />
      ))}
    </Space>
  )
}

export default ProjectSection
