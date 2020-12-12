import { Form, Input, Button, Space } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const ListWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  padding-right: 2rem;
`

function WhatDidIDo() {
  const onFinish = (values: any) => {
    console.log('Received values of form:', values)
  }

  return (
    <Form onFinish={onFinish} autoComplete="off">
      <Form.List name="users">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field) => (
              <ListWrapper>
                <Form.Item
                  {...field}
                  name={[field.name, 'first']}
                  fieldKey={[field.fieldKey, 'first']}
                  rules={[{ required: true, message: '어떤 일을 하셨는지 잘 생각해보세요.' }]}
                  style={{ flex: 1, marginRight: '1rem' }}
                >
                  <Input size="large" placeholder="어떤 일을 하셨습니까?" />
                </Form.Item>
                <MinusCircleOutlined
                  style={{ fontSize: '2rem', position: 'absolute', top: '5px', right: 0 }}
                  onClick={() => remove(field.name)}
                />
              </ListWrapper>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                한 일 추가하기
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default WhatDidIDo
