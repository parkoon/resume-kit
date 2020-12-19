import React from 'react'
import { Descriptions, Badge, Card, Button, Tag } from 'antd'
import { Project } from '@Shared/types/Project'

type ProjectDescriptionProps = {
  experience: Project
}
function ProjectDescription({ experience }: ProjectDescriptionProps) {
  return (
    <Card style={{ marginBottom: '1.5rem' }}>
      <Descriptions
        bordered
        title={experience.corp}
        extra={<Button type="dashed">수정하기</Button>}
      >
        <Descriptions.Item label="회사명">{experience.corp}</Descriptions.Item>
        <Descriptions.Item label="프로젝트명">{experience.title}</Descriptions.Item>

        <Descriptions.Item label="진행여부">
          {experience.completed ? '종료' : '진행중'}
        </Descriptions.Item>

        <Descriptions.Item label="기간">
          {experience.startedAt} ~ {experience.resignedAt}
        </Descriptions.Item>
        <Descriptions.Item label="기술 스펙">
          {experience.skills.map((skill, index) => (
            <Tag key={index}>{skill}</Tag>
          ))}
        </Descriptions.Item>

        <Descriptions.Item label="업무">
          {experience.tasks.map((task, index) => (
            <div key={index}>{task}</div>
          ))}
        </Descriptions.Item>
        <Descriptions.Item label="설명">{experience.description}</Descriptions.Item>
      </Descriptions>
    </Card>
  )
}

export default ProjectDescription
