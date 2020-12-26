import React from 'react'
import { Form, Input, Button } from 'antd'

import { OGImage } from '@Shared/types/Meta'

import * as S from './styles'

type OpenGraphFormProps = {
  url: string
  onComplete(values: OGImage): void
}
function OpenGraphForm({ url, onComplete }: OpenGraphFormProps) {
  return (
    <S.Wrapper>
      <img src={`${url}?${Date.now()}`} width="320" />
      <Form
        onFinish={onComplete}
        autoComplete="off"
        layout="vertical"
        style={{ width: 320, marginTop: 7 }}
      >
        <Form.Item
          name="title"
          label="타이틀"
          rules={[{ required: true, message: '타이틀을 입력해주세요.' }]}
          style={{ marginBottom: 7 }}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="subtitle"
          label="서브타이틀"
          rules={[{ required: true, message: '서브 타이틀을 입력해주세요.' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">생성하기</Button>
        </Form.Item>
      </Form>
    </S.Wrapper>
  )
}

export default OpenGraphForm
