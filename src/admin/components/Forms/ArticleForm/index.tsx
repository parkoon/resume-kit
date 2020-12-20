import { Form, Input } from 'antd'

import { Article } from '@Shared/types/Article'
import { FormCompletedType } from '@Admin/types'
import randomId from '@Admin/helpers/randomId'

type ArticleFormProps = {
  id: string
  onComplete(type: FormCompletedType, values: Article): void
  initialValue?: Article
}

function ArticleForm({ id, onComplete, initialValue }: ArticleFormProps) {
  const articleId = initialValue ? initialValue.id : randomId()

  const onFinish = (values: Article) => {
    onComplete(initialValue ? 'modify' : 'add', values)
  }
  return (
    <div>
      <Form id={id} onFinish={onFinish} autoComplete="off" layout="vertical">
        <Form.Item style={{ display: 'none' }} initialValue={articleId} name="id" />
        <Form.Item
          name="title"
          label="제목"
          rules={[{ required: true, message: '타이틀을 입력해주세요.' }]}
          initialValue={initialValue?.title}
        >
          <Input placeholder="타이틀" defaultValue={initialValue?.title} />
        </Form.Item>
        <Form.Item
          name="url"
          label="url"
          rules={[{ required: true, message: 'url을 입력해주세요.' }]}
          initialValue={initialValue?.url}
        >
          <Input placeholder="url" defaultValue={initialValue?.url} />
        </Form.Item>
      </Form>
    </div>
  )
}

export default ArticleForm
