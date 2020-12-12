import React from 'react'
import { Descriptions, Badge, Card, Button, Tag } from 'antd'
import { Experience } from '@Shared/types/Experience'

type ExperienceDescriptionProps = {
  experience: Experience
}
function ExperienceDescription({ experience }: ExperienceDescriptionProps) {
  return (
    <Card style={{ marginBottom: '1.5rem' }}>
      <Descriptions
        title={experience.corp}
        bordered
        extra={<Button type="dashed">수정하기</Button>}
      >
        <Descriptions.Item label="회사명">{experience.corp}</Descriptions.Item>
        <Descriptions.Item label="직책" span={2}>
          {experience.position}
        </Descriptions.Item>
        <Descriptions.Item label="업무기간">
          {experience.startedAt} ~ {experience.resignedAt}
        </Descriptions.Item>
        <Descriptions.Item label="총 업무 일수">
          {experience.period.years}년 {experience.period.months}개월
        </Descriptions.Item>
        <Descriptions.Item label="퇴사여부">
          {experience.resigned ? '퇴사' : '재직중'}
        </Descriptions.Item>
        <Descriptions.Item label="기술 스펙" span={3}>
          {experience.skills.map((skill, index) => (
            <Tag key={index}>{skill}</Tag>
          ))}
        </Descriptions.Item>
        <Descriptions.Item label="업무">
          {experience.tasks.map((task, index) => (
            <div key={index}>{task}</div>
          ))}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  )
}

export default ExperienceDescription
