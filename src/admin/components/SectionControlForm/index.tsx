import React from 'react'
import { Form, Switch, Row, Col } from 'antd'

import { SystemEnabled } from '@Shared/types/System'

type SectionControlFormProps = {
  initialValue: SystemEnabled
  onChange(value: SystemEnabled): void
}
function SectionControlForm({ initialValue, onChange }: SectionControlFormProps) {
  console.log('initialValue,', initialValue)
  return (
    <div>
      <Form
        onValuesChange={(_, allValue: SystemEnabled) => {
          onChange(allValue)
        }}
        layout="vertical"
      >
        <Row>
          <Col span={5}>
            <Form.Item name="profile" label="PROFILE" initialValue={initialValue.profile}>
              <Switch checked={initialValue.profile} />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="project" label="PROJECT" initialValue={initialValue.project}>
              <Switch checked={initialValue.project} />
            </Form.Item>
          </Col>

          <Col span={4}>
            <Form.Item name="skill" label="SKILL" initialValue={initialValue.skill}>
              <Switch checked={initialValue.skill} />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item name="education" label="EDUCATION" initialValue={initialValue.education}>
              <Switch checked={initialValue.education} />
            </Form.Item>
          </Col>

          <Col span={4}>
            <Form.Item name="etc" label="ETC" initialValue={initialValue.etc}>
              <Switch checked={initialValue.etc} />
            </Form.Item>
          </Col>
        </Row>

        {/* <Form.Item name="career" label="CAREER">
          <Switch checked={initialValueenabled..career} />
        </Form.Item> */}
      </Form>
    </div>
  )
}

export default SectionControlForm
