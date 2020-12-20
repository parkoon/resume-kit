import React from 'react'
import { Descriptions, Card, Button } from 'antd'
import moment from 'moment'

import { CommonFormValues } from '@Admin/components/Forms/CommonForm'
import { calcCareerYearAndMonth } from '@Shared/helpers'

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
  source: CommonFormValues
  type: DescriptionType
  onModify?(id: string): void
  onDelete?(id: string): void
}
function CommonDescription({ source, type, onModify, onDelete }: CommonDescriptionProps) {
  const { years, months } = calcCareerYearAndMonth(
    source.endedAt ? [moment(source.startedAt), moment(source.endedAt)] : moment(source.startedAt)
  )
  return (
    <Card style={{ marginBottom: '1.5rem' }}>
      <Descriptions
        title={source.title}
        bordered
        extra={[
          <Button
            type="dashed"
            style={{ marginRight: 7 }}
            onClick={() => onModify && onModify(source.id)}
          >
            수정하기
          </Button>,
          <Button danger onClick={() => onDelete && onDelete(source.id)}>
            삭제하기
          </Button>,
        ]}
      >
        <Descriptions.Item label={Label[type].title}>{source.title}</Descriptions.Item>
        <Descriptions.Item label={Label[type].subtitle} span={2}>
          {source.subtitle}
        </Descriptions.Item>
        <Descriptions.Item label={Label[type].period}>
          {source.startedAt} ~ {source.endedAt}
        </Descriptions.Item>
        <Descriptions.Item label={Label[type].totalPeriod}>
          {years}년 {months}개월
        </Descriptions.Item>
        <Descriptions.Item label={Label[type].completed}>
          {source.completed ? '퇴사' : '재직중'}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  )
}

export default CommonDescription
