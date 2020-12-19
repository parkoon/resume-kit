import { useState } from 'react'
import { Form, Input, Select, Switch } from 'antd'
import { HomeOutlined, IdcardOutlined } from '@ant-design/icons'

import DatePickers, { Date, DateString } from '@Admin/components/DatePickers'
import WhatDidIDo from '@Admin/components/WhatDidIdDo'
import { calcCareerYearAndMonth } from '@Shared/helpers'
import TextArea from 'antd/lib/input/TextArea'
import { skillTitles } from '@Shared/types/Skill'

const { Option } = Select

function ProjectForm() {
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
      <Form id="experience" onFinish={onFinish} autoComplete="off" layout="vertical">
        <Form.Item
          name="corp"
          label="회사"
          rules={[{ required: true, message: '회사를 선택해주세요.' }]}
        >
          <Select defaultValue="lucy" style={{ width: 120 }}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </Form.Item>

        <Form.Item name="completed" label="종료여부">
          <Switch
            onChange={(checked) => setCompleted(!checked)}
            checkedChildren="진행중"
            unCheckedChildren="종료"
          />
        </Form.Item>
        <Form.Item
          label="프로젝트 기간"
          name="period"
          rules={[{ required: true, message: '시작일 및 종료일을 입력해주세요.' }]}
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
          label="프로젝트명"
          rules={[{ required: true, message: '프로젝트 이름을 입력해주세요.' }]}
        >
          <Input placeholder="프로젝트 이름을 입력해주세요." prefix={<IdcardOutlined />} />
        </Form.Item>
        <Form.Item
          name="description"
          label="프로젝트 설명"
          rules={[{ required: true, message: '프로젝트를 간단히 설명해주세요.' }]}
        >
          <TextArea placeholder="프로젝트를 간단히 설명해주세요." rows={4} />
        </Form.Item>

        <Form.Item
          name="skills"
          label="기술 스펙"
          rules={[{ required: true, message: '프로젝트에 사용된 기술을 선택해주세요.' }]}
        >
          <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="프로젝트에 사용된 기술을 선택해주세요."
            onChange={handleSkillChange}
            options={skillTitles.map((title) => ({ value: title }))}
          />
        </Form.Item>

        <WhatDidIDo />
      </Form>
    </div>
  )
}

export default ProjectForm
