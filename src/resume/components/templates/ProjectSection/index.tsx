import React from 'react'
import Description from '@Resume/components/atoms/Description'
import Title from '@Resume/components/atoms/Typography/Title'
import Text from '@Resume/components/atoms/Typography/Text'
import Space from '@Resume/components/atoms/Space'
import List from '@Resume/components/atoms/List'
import { usePayload } from '@Resume/context/PayloadContext'
import Tag from '@Resume/components/atoms/Tag'
import { Project } from '@Shared/types/Project'

type ProjectContentProps = {
  projects: Project[]
}
function ProjectContent({ projects }: ProjectContentProps) {
  return (
    <>
      {projects.map(({ id, title, startedAt, endedAt, description, tasks, skills }, index) => (
        <div key={id} style={{ marginBottom: index === projects.length - 1 ? 0 : 42 }}>
          <Title level={4}>{title}</Title>
          <Text italic>
            {startedAt} ~ {endedAt}
          </Text>

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
        </div>
      ))}
    </>
  )
}

function ProjectSection() {
  const {
    project: { data },
    career,
  } = usePayload()

  const groupByCorp = data.reduce<{ [key: string]: Project[] }>((prev, project) => {
    prev[project.where.id] = prev[project.where.id] || []
    prev[project.where.id].push(project)

    return prev
  }, {})

  const findCorpById = (id: string) => career.data.find((c) => c.id === id)!

  return (
    <Space section>
      <Title level={3} section>
        WORK EXPERIENCE
      </Title>

      {Object.keys(groupByCorp).map((key) => {
        const corp = findCorpById(key)
        return (
          <Description
            left={
              <Space>
                <Title level={4}>{corp.title}</Title>
                <Text block>{corp.subtitle}</Text>
                <Text>
                  {corp.startedAt} ~ {corp.endedAt}
                </Text>
              </Space>
            }
            right={<ProjectContent projects={groupByCorp[key]} />}
          />
        )
      })}
    </Space>
  )
}

export default ProjectSection
