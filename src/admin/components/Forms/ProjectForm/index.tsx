import { useContext, useState } from 'react'
import moment from 'moment'
import { Button, DatePicker, Form, Input, Select, Switch } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import { IdcardOutlined, LinkOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'

import ProjectContext from '@Admin/components/ProjectPlayGround/context'
import { DATE_FORMAT } from '@Admin/constants/date'
import randomId from '@Admin/helpers/randomId'

const { Option } = Select

type ProjectFormProps = {
  id: string
  onComplete(): void
}
function ProjectForm({ id, onComplete }: ProjectFormProps) {
  const [hasEndDate, setHasEndDate] = useState(true)
  const { add, careers, sheets } = useContext(ProjectContext)

  const onFinish = (values: any) => {
    onComplete()
    add({
      ...values,
      startedAt: moment(values.startedAt).format(DATE_FORMAT),
      endedAt: values.endedAt ? moment(values.endedAt).format(DATE_FORMAT) : undefined,
      where: careers.find((career) => career.id === values.where),
      tasks: values.tasks ? values.tasks.map((title: string) => ({ title, id: randomId() })) : [],
    })
  }
  return (
    <Form id={id} onFinish={onFinish} autoComplete="off" layout="vertical">
      <Form.Item name="id" style={{ display: 'none' }} initialValue={randomId()} />

      <Form.Item
        name="where"
        label="회사"
        rules={[{ required: true, message: '회사를 선택해주세요.' }]}
        initialValue={careers[0].id}
      >
        <Select defaultValue={careers[0].id} style={{ width: 120 }}>
          {careers.map((career) => (
            <Option value={career.id}>{career.title}</Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item name="completed" label="진행여부" initialValue={hasEndDate}>
        <Switch
          defaultChecked={hasEndDate}
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
      >
        <DatePicker format={DATE_FORMAT} picker="month" placeholder="시작일" />
      </Form.Item>

      {hasEndDate && (
        <Form.Item
          label="종료일"
          name="endedAt"
          rules={[{ required: true, message: '종료일 입력해주세요.' }]}
        >
          <DatePicker format={DATE_FORMAT} picker="month" placeholder="시작일" />
        </Form.Item>
      )}

      <Form.Item
        name="title"
        label="프로젝트명"
        rules={[{ required: true, message: '프로젝트 이름을 입력해주세요.' }]}
      >
        <Input placeholder="프로젝트 이름을 입력해주세요." prefix={<IdcardOutlined />} />
      </Form.Item>

      <Form.Item name="url" label="프로젝트 링크">
        <Input placeholder="프로젝트 링크 입력해주세요." prefix={<LinkOutlined />} />
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
          options={sheets.map((sheet) => ({ value: sheet.title }))}
        />
      </Form.Item>

      <Form.List name="tasks">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field, index) => (
              <Form.Item label={index === 0 ? '내가 한 일' : ''} required key={field.key}>
                <Form.Item
                  {...field}
                  validateTrigger={['onChange', 'onBlur']}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: '프로젝트에서 했던 일을 입력해주세요.',
                    },
                  ]}
                  style={{ position: 'relative', marginBottom: 0 }}
                >
                  <Input
                    style={{ paddingRight: 30 }}
                    placeholder="프로젝트에서 했던 일을 입력해주세요."
                  />
                </Form.Item>
                <MinusCircleOutlined
                  style={{ position: 'absolute', top: 10, right: 10 }}
                  onClick={() => remove(field.name)}
                />
              </Form.Item>
            ))}
            <Form.Item>
              <Button block type="dashed" onClick={() => add()} icon={<PlusOutlined />}>
                업무 추가하기
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </Form>
  )
}

export default ProjectForm
