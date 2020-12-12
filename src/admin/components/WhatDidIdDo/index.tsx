import { Form, Input, Button, Space } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import styled from 'styled-components'

function WhatDidIDo() {
  const onFinish = (values: any) => {
    console.log('Received values of form:', values)
  }

  return (
    <>
      <Form.List name="tasks">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field, index) => (
              <>
                <Form.Item
                  {...field}
                  label={index === 0 ? '내가 한 일' : ''}
                  rules={[{ required: true, message: '어떤 일을 하셨는지 잘 생각해보세요.' }]}
                  style={{ position: 'relative' }}
                >
                  <Input
                    size="large"
                    placeholder="어떤 일을 하셨습니까?"
                    style={{ paddingRight: '40px' }}
                  />
                  <MinusCircleOutlined
                    style={{ fontSize: '2rem', position: 'absolute', top: '10px', right: '10px' }}
                    onClick={() => remove(field.name)}
                  />
                </Form.Item>
              </>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                한 일 추가하기
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </>
  )
}

export default WhatDidIDo
