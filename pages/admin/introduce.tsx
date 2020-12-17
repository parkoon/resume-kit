import { Card, Row, Col } from 'antd'
import AdminLayout from '@Admin/components/AdminLayout'
import EditableTextField from '@Admin/components/EditableTextField'
import introduceSections from '@Shared/constants/introduceSections'
import Notification from '@Admin/helpers/notification'
import Grid from 'antd/lib/card/Grid'

function IntroduceManagement() {
  const onSave = (name: string, value: string) => {
    const message = `You've updated your ${name} title`
    Notification.success(message)
  }

  return (
    <AdminLayout
      title="프로필"
      subtitle="내 정보를 입력해주세요. 입력하지 않은 필드는 노출되지 않습니다."
    >
      <Row gutter={7}>
        <Col span={12}>
          <Card title="기본정보" style={{ marginBottom: 7 }}>
            {introduceSections.default.map((section) => (
              <EditableTextField
                name={section.name}
                icon={section.icon}
                type="text"
                key={section.name}
                placeholder={section.placeholder}
                initialValue=""
                onSave={onSave}
              />
            ))}
          </Card>
        </Col>
        <Col span={12}>
          <Card title="연락처" style={{ marginBottom: 7 }}>
            {introduceSections.contact.map((section) => (
              <EditableTextField
                name={section.name}
                icon={section.icon}
                type="text"
                key={section.name}
                placeholder={section.placeholder}
                initialValue=""
                onSave={onSave}
              />
            ))}
          </Card>
        </Col>
      </Row>

      <Card title="소셜 네트워크" style={{ marginBottom: 7 }}>
        {introduceSections.social.map((section) => (
          <EditableTextField
            name={section.name}
            icon={section.icon}
            type="text"
            key={section.name}
            placeholder={section.placeholder}
            initialValue=""
            onSave={onSave}
          />
        ))}
      </Card>
      <Card title="추가정보">
        {introduceSections.more.map((section) => (
          <EditableTextField
            name={section.name}
            icon={section.icon}
            type={section.name === 'about' ? 'textarea' : 'text'}
            key={section.name}
            placeholder={section.placeholder}
            initialValue=""
            onSave={onSave}
          />
        ))}
      </Card>
    </AdminLayout>
  )
}

export default IntroduceManagement
