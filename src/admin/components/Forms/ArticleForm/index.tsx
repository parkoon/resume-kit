import { Form, Input } from 'antd'

type ArticleFormProps = {
  id: string
}
function ArticleForm({ id }: ArticleFormProps) {
  const onFinish = (values: any) => {
    console.log('Received values of form:', values)
  }
  return (
    <div>
      <Form id={id} onFinish={onFinish} autoComplete="off" layout="vertical">
        <Form.Item
          name="title"
          label="제목"
          rules={[{ required: true, message: '타이틀을 입력해주세요.' }]}
        >
          <Input placeholder="타이틀" />
        </Form.Item>
        <Form.Item
          name="url"
          label="url"
          rules={[{ required: true, message: 'url을 입력해주세요.' }]}
        >
          <Input placeholder="url" />
        </Form.Item>
      </Form>
    </div>
  )
}

export default ArticleForm
