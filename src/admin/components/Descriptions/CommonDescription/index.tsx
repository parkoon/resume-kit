import React from 'react'
import { Descriptions, Badge, Card, Button, Tag } from 'antd'
import { CommonSection } from '@Shared/types/CommonSection'

const Label: {
  [key: string]: {
    title: string
    subtitle: string
    period: string
    totalPeriod: string
    completed: string
  }
} = {
  career: {
    title: '회사명',
    subtitle: '직책',
    period: '업무기간',
    totalPeriod: '총 업무 일수',
    completed: '퇴사여부',
  },
  education: {
    title: '학교명',
    subtitle: '분야',
    period: '재학기간',
    totalPeriod: '총 재학 일수',
    completed: '졸업여부',
  },
  etc: {
    title: '제목',
    subtitle: '한 줄 설명',
    period: '기간',
    totalPeriod: '총 기간',
    completed: '완료여부',
  },
}
type DescriptionType = 'career' | 'education' | 'etc'
type CommonDescriptionProps = {
  source: CommonSection
  type: DescriptionType
}
function CommonDescription({ source, type }: CommonDescriptionProps) {
  return (
    <Card style={{ marginBottom: '1.5rem' }}>
      <Descriptions title={source.title} bordered extra={<Button type="dashed">수정하기</Button>}>
        <Descriptions.Item label={Label[type].title}>{source.title}</Descriptions.Item>
        <Descriptions.Item label={Label[type].subtitle} span={2}>
          {source.subtitle}
        </Descriptions.Item>
        <Descriptions.Item label={Label[type].period}>
          {source.startedAt} ~ {source.completedAt}
        </Descriptions.Item>
        <Descriptions.Item label={Label[type].totalPeriod}>
          {source.period.years}년 {source.period.months}개월
        </Descriptions.Item>
        <Descriptions.Item label={Label[type].completed}>
          {source.completed ? '퇴사' : '재직중'}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  )
}

export default CommonDescription
