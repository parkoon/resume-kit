import { useState } from 'react'
import moment from 'moment'
import { DatePicker, Form, Input, Switch } from 'antd'

import { HomeOutlined, IdcardOutlined } from '@ant-design/icons'
import { DATE_FORMAT } from '@Admin/constants/date'

type CommonFormProps = {
  id: string
  onComplete(values: FormValues): void
  initialValue?: FormValues
}

type FormValues = {
  completed: boolean
  startedAt: string
  endedAt?: string
  title: string
  subtitle: string
}
function CommonForm({ id, onComplete, initialValue }: CommonFormProps) {
  const [hasEndDate, setHasEndDate] = useState(true)

  const onFinish = (values: FormValues) => {
    console.log(values)
    onComplete({
      ...values,
      startedAt: moment(values.startedAt).format(DATE_FORMAT),
      endedAt: moment(values.endedAt).format(DATE_FORMAT),
    })
  }
  return (
    <div>
      <Form id={id} onFinish={onFinish} autoComplete="off" layout="vertical">
        <Form.Item name="completed" label="진행중" initialValue={false}>
          <Switch
            defaultChecked={true}
            onChange={(checked) => {
              setHasEndDate(checked)
            }}
            checkedChildren="진행중"
            unCheckedChildren="종료"
          />
        </Form.Item>
        <Form.Item
          label="시작일"
          name="startedAt"
          rules={[{ required: true, message: '시작일 입력해주세요.' }]}
        >
          <DatePicker placeholder="시작일" format={'YYYY. MM'} picker="month" />
        </Form.Item>

        {hasEndDate && (
          <Form.Item
            label="종료일"
            name="endedAt"
            rules={[{ required: true, message: '종료일 입력해주세요.' }]}
          >
            <DatePicker placeholder="종료일" format={'YYYY. MM'} picker="month" />
          </Form.Item>
        )}

        <Form.Item
          name="title"
          label="타이틀"
          initialValue="zz"
          rules={[{ required: true, message: '타이틀을 입력해주세요.' }]}
        >
          <Input
            placeholder="회사명 / 학교명과 같은 타이틀을 입력해주세요."
            prefix={<HomeOutlined />}
          />
        </Form.Item>
        <Form.Item
          name="subtitle"
          label="서브 타이틀"
          initialValue="zz"
          rules={[{ required: true, message: '서브 타이틀을 입력해주세요.' }]}
        >
          <Input
            placeholder="직책 / 분야와 같은 서브 타이틀을 입력해주세요."
            prefix={<IdcardOutlined />}
          />
        </Form.Item>
      </Form>
    </div>
  )
}

export default CommonForm
