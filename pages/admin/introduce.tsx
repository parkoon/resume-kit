import AdminLayout from '@Admin/components/AdminLayout'
import { Card, Button, Form } from 'antd'
import TextArea from 'antd/lib/input/TextArea'

function IntroduceManagement() {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  return (
    <AdminLayout>
      <Card style={{ width: '50%' }}>
        <Form initialValues={{ remember: true }} onFinish={onFinish}>
          <Form.Item
            name="introduce"
            rules={[{ required: true, message: 'Please input your introduce!' }]}
          >
            <TextArea rows={12} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large">
              SAVE
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </AdminLayout>
  )
}

export default IntroduceManagement
