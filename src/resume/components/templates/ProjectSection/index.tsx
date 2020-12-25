import React from 'react'
import Description from '@Resume/components/atoms/Description'
import Title from '@Resume/components/atoms/Typography/Title'
import Text from '@Resume/components/atoms/Typography/Text'
import Space from '@Resume/components/atoms/Space'
import List from '@Resume/components/atoms/List'
import { usePayload } from '@Resume/context/PayloadContext'

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
      {/* TODO. date moment 형식으로 저장되어 있음 */}
      {data.map(({ title, tasks, description, startedAt, endedAt, where }) => (
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
              <Text italic>{where.title}</Text>
              <Space top={12}>
                <List items={tasks.map((task) => task.title)} />
              </Space>
            </>
          }
        />
      ))}
    </Space>
  )
}

export default ProjectSection
