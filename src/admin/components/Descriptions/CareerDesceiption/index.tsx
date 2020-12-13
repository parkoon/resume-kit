import React from 'react'
import { Descriptions, Badge, Card, Button, Tag } from 'antd'
import { CommonSection } from '@Shared/types/CommonSection'

type CareerDescriptionProps = {
  career: CommonSection
}
function CareerDescription({ career }: CareerDescriptionProps) {
  return (
    <Card style={{ marginBottom: '1.5rem' }}>
      <Descriptions title={career.title} bordered extra={<Button type="dashed">수정하기</Button>}>
        <Descriptions.Item label="회사명">{career.title}</Descriptions.Item>
        <Descriptions.Item label="직책" span={2}>
          {career.subtitle}
        </Descriptions.Item>
        <Descriptions.Item label="업무기간">
          {career.startedAt} ~ {career.completedAt}
        </Descriptions.Item>
        <Descriptions.Item label="총 업무 일수">
          {career.period.years}년 {career.period.months}개월
        </Descriptions.Item>
        <Descriptions.Item label="퇴사여부">
          {career.completed ? '퇴사' : '재직중'}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  )
}

export default CareerDescription
