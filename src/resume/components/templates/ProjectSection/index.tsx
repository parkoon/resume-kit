import React from 'react'

import Description from '@Resume/components/atoms/Description'
import Title from '@Resume/components/atoms/Typography/Title'
import Text from '@Resume/components/atoms/Typography/Text'
import Space from '@Resume/components/atoms/Space'
import List from '@Resume/components/atoms/List'
import { usePayload } from '@Resume/context/PayloadContext'
import Tag from '@Resume/components/atoms/Tag'
import { Project } from '@Shared/types/Project'
import withEnabled from '@Resume/hoc/withEnabled'
import { sortByStartedAt, periodify } from '@Shared/helpers'
import { Career } from '@Shared/types/Career'

import * as S from './styles'

type ProjectContentProps = {
  projects: Project[]
}
function ProjectContent({ projects }: ProjectContentProps) {
  return (
    <>
      {sortByStartedAt<Project[]>(projects, -1).map(
        ({ id, title, url, startedAt, endedAt, description, tasks, skills }, index) => (
          <S.Wrapper key={id} last={index === projects.length - 1}>
            <Title level={4}>
              {url ? (
                <S.Anchor href={url} target="blank">
                  {title}
                </S.Anchor>
              ) : (
                title
              )}
            </Title>
            <Text italic>{periodify(startedAt, endedAt)}</Text>

            <Space top={12}>
              <Title level={5}>Description</Title>
              <Text block>{description}</Text>
            </Space>
            <Space top={12}>
              <List title="What I do" items={tasks.map((task) => task.title)} />
            </Space>
            <Space top={12}>
              <Title level={5}>Spec Sheet</Title>
              <Space top={7}>
                {skills.map((skill, index) => (
                  <Tag key={index} text={skill} />
                ))}
              </Space>
            </Space>
          </S.Wrapper>
        )
      )}
    </>
  )
}

type ProjectSectionProps = {
  sort: number
}
function ProjectSection(_: ProjectSectionProps) {
  const {
    project: { data },
    career: { data: careers },
  } = usePayload()

  const groupByCorp = data.reduce<{ [key: string]: Project[] }>((prev, project) => {
    prev[project.where.id] = prev[project.where.id] || []
    prev[project.where.id].push(project)

    return prev
  }, {})

  return (
    <Space section>
      <Title level={3} section>
        WORK EXPERIENCE
      </Title>

      {sortByStartedAt<Career[]>(careers, -1).map((career) => {
        if (!groupByCorp[career.id]) return null
        return (
          <Description
            key={career.id}
            left={
              <Space>
                <Title level={4}>{career.title}</Title>
                <Text block>{career.subtitle}</Text>
                <Text>{periodify(career.startedAt, career.endedAt)}</Text>
              </Space>
            }
            right={<ProjectContent projects={groupByCorp[career.id]} />}
          />
        )
      })}
    </Space>
  )
}

export default withEnabled('project', ProjectSection)
