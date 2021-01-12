import { useState } from 'react'
import moment from 'moment'
import { DatePicker, Form, Input, Switch } from 'antd'
import { HomeOutlined, IdcardOutlined } from '@ant-design/icons'

import { DATE_FORMAT } from '@Admin/constants/date'
import randomId from '@Admin/helpers/randomId'
import { FormCompletedType } from '@Admin/types'
import { Career } from '@Shared/types/Career'
import { Etc } from '@Shared/types/Etc'
import { Education } from '@Shared/types/Education'

type CommonFormProps = {
  id: string
  onComplete(type: FormCompletedType, values: CommonFormValues): void
  initialValue?: CommonFormValues
}

export type CommonFormValues = Career | Etc | Education

function CommonForm({ id, onComplete, initialValue }: CommonFormProps) {
  const [hasEndDate, setHasEndDate] = useState(initialValue ? initialValue.completed : true)
  const commonId = initialValue ? initialValue.id : randomId()

  const onFinish = (values: CommonFormValues) => {
    onComplete(initialValue ? 'modify' : 'add', {
      ...values,
      id: commonId,
      startedAt: moment(values.startedAt).format(DATE_FORMAT),
      endedAt: values.endedAt ? moment(values.endedAt).format(DATE_FORMAT) : undefined,
    })
  }

  const initialStartDate = initialValue ? moment(initialValue.startedAt) : undefined
  const initialEndDate = initialValue ? moment(initialValue.endedAt) : undefined

  return (
    <Form id={id} onFinish={onFinish} autoComplete="off" layout="vertical">
      <Form.Item
        name="completed"
        label="진행여부"
        initialValue={hasEndDate}
        rules={[{ required: true }]}
      >
        <Switch
          checked={hasEndDate}
          onChange={(checked) => {
            setHasEndDate(checked)
          }}
          checkedChildren="종료"
          unCheckedChildren="진행중"
        />
      </Form.Item>
      <Form.Item
        label="시작일"
        name="startedAt"
        rules={[{ required: true, message: '시작일 입력해주세요.' }]}
        initialValue={initialStartDate}
      >
        <DatePicker
          defaultValue={initialStartDate}
          format={DATE_FORMAT}
          picker="month"
          placeholder="시작일"
        />
      </Form.Item>

      {hasEndDate && (
        <Form.Item
          label="종료일"
          name="endedAt"
          rules={[{ required: true, message: '종료일 입력해주세요.' }]}
          initialValue={initialEndDate}
        >
          <DatePicker
            defaultValue={initialEndDate}
            format={DATE_FORMAT}
            placeholder="종료일"
            picker="month"
          />
        </Form.Item>
      )}

      <Form.Item
        name="title"
        label="타이틀"
        initialValue={initialValue?.title}
        rules={[{ required: true, message: '타이틀을 입력해주세요.' }]}
      >
        <Input
          placeholder="회사명 / 학교명과 같은 타이틀을 입력해주세요."
          prefix={<HomeOutlined />}
        />
      </Form.Item>
      <Form.Item
        name="subtitle"
        initialValue={initialValue?.subtitle}
        label="서브 타이틀"
        rules={[{ required: true, message: '서브 타이틀을 입력해주세요.' }]}
      >
        <Input
          placeholder="직책 / 분야와 같은 서브 타이틀을 입력해주세요."
          prefix={<IdcardOutlined />}
        />
      </Form.Item>
    </Form>
  )
}

export default CommonForm
