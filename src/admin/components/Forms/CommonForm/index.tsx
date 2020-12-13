import { useState } from 'react'
import { Form, Input, Switch } from 'antd'
import { HomeOutlined, IdcardOutlined } from '@ant-design/icons'

import DatePickers, { Date, DateString } from '@Admin/components/DatePickers'
import { calcCareerYearAndMonth } from '@Shared/helpers'

type CommonFormProps = {
  id: string
}
function CommonForm({ id }: CommonFormProps) {
  const [completed, setCompleted] = useState(true)

  const [dateString, setDateString] = useState<DateString>('')
  const [career, setCareer] = useState<{ years: number; months: number }>()

  const handleCareerDateChange = (date: Date, str: DateString) => {
    setDateString(str)

    if (date) {
      setCareer(calcCareerYearAndMonth(date))
    }
  }

  const handleSkillChange = (values: string[]) => {
    console.log(values)
  }

  const onFinish = (values: any) => {
    console.log('Received values of form:', values)
  }
  return (
    <div>
      <Form id={id} onFinish={onFinish} autoComplete="off" layout="vertical">
        <Form.Item name="completed" label="진행중">
          <Switch
            onChange={(checked) => setCompleted(!checked)}
            checkedChildren="진행중"
            unCheckedChildren="종료"
          />
        </Form.Item>
        <Form.Item
          label="기간"
          name="period"
          rules={[{ required: true, message: '기간을 입력해주세요.' }]}
        >
          <DatePickers
            startDateLabel="시작일"
            doneDateLabel="종료일"
            onChange={handleCareerDateChange}
            multiple={completed}
          />
        </Form.Item>

        <Form.Item
          name="title"
          label="타이틀"
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
