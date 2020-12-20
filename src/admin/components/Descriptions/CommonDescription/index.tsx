import React from 'react'
import { Descriptions, Card, Button, Tag, Popconfirm } from 'antd'
import moment from 'moment'

import { CommonFormValues } from '@Admin/components/Forms/CommonForm'
import { calcCareerYearAndMonth } from '@Shared/helpers'

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
          <Popconfirm
            title="정말 지우시겠습니까?"
            okText="삭제"
            cancelText="취소"
            onConfirm={() => onDelete && onDelete(source.id)}
          >
            <Button danger>삭제하기</Button>
          </Popconfirm>,
        ]}
      >
        <Descriptions.Item label="이름">{source.title}</Descriptions.Item>
        <Descriptions.Item label="분야" span={2}>
          {source.subtitle}
        </Descriptions.Item>
        <Descriptions.Item label="기간">
          {source.startedAt} ~ {source.endedAt}
        </Descriptions.Item>
        <Descriptions.Item label="총 기간">
          <Tag>
            {years ? `${years}년 ` : ''} {months}개월
          </Tag>
        </Descriptions.Item>
        <Descriptions.Item label="종료여부">
          {source.completed ? <Tag color="volcano">종료</Tag> : <Tag color="green">진행중</Tag>}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  )
}

export default CommonDescription
