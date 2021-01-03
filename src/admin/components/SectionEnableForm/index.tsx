import React from 'react'
import { Form, Switch, Row, Col } from 'antd'

import { SystemEnabled } from '@Shared/types/System'

type SectionEnableFormProps = {
  initialValue: SystemEnabled
  onChange(value: SystemEnabled): void
}
function SectionEnableForm({ initialValue, onChange }: SectionEnableFormProps) {
  return (
    <div>
      <Form
        onValuesChange={(_, allValue: SystemEnabled) => {
          onChange(allValue)
        }}
        layout="vertical"
      >
        <Row>
          <Col span={6}>
            <Form.Item name="profile" label="PROFILE" initialValue={initialValue.profile}>
              <Switch checked={initialValue.profile} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="career" label="CAREER" initialValue={initialValue.career}>
              <Switch checked={initialValue.career} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="project" label="PROJECT" initialValue={initialValue.project}>
              <Switch checked={initialValue.project} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="skill" label="SKILL" initialValue={initialValue.skill}>
              <Switch checked={initialValue.skill} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="education" label="EDUCATION" initialValue={initialValue.education}>
              <Switch checked={initialValue.education} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="article" label="ARTICLE" initialValue={initialValue.article}>
              <Switch checked={initialValue.article} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="etc" label="ETC" initialValue={initialValue.etc}>
              <Switch checked={initialValue.etc} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default SectionEnableForm
