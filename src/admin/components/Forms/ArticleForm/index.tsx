import { useState } from 'react'
import { Button, Form, Input, Switch } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'

import { Date, DateString } from '@Admin/components/DatePickers'
import { calcCareerYearAndMonth } from '@Shared/helpers'

type ArticleFormProps = {
  id: string
}
function ArticleForm({ id }: ArticleFormProps) {
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
        <Form.Item name="completed" label="작성여부">
          <Switch defaultChecked={true} checkedChildren="완료" unCheckedChildren="작성중" />
        </Form.Item>

        <Form.List name="articles">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field) => (
                <div style={{ display: 'flex' }}>
                  <Form.Item
                    {...field}
                    name={[field.name, 'title']}
                    fieldKey={[field.fieldKey, 'title']}
                    rules={[{ required: true, message: '타이틀을 입력해주세요.' }]}
                  >
                    <Input placeholder="타이틀" />
                  </Form.Item>
                  <Form.Item
                    style={{ position: 'relative', flex: 1, marginLeft: 10 }}
                    {...field}
                    name={[field.name, 'url']}
                    fieldKey={[field.fieldKey, 'url']}
                    rules={[{ required: true, message: 'url을 입력해주세요.' }]}
                  >
                    <Input placeholder="url" />
                    <MinusCircleOutlined
                      style={{ position: 'absolute', top: 8, right: 8 }}
                      onClick={() => remove(field.name)}
                    />
                  </Form.Item>
                </div>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  기사 추가하기
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
    </div>
  )
}

export default ArticleForm
