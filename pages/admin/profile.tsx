import useSWR from 'swr'
import { Card, Row, Col } from 'antd'

import AdminLayout from '@Admin/layout'
import EditableText from '@Admin/components/Editable/EditableText'
import Notification from '@Admin/helpers/notification'
import { PROFILE_SECTIONS } from '@Admin/constants/profile'
import { API, ProfileAPI, ProfileGETResponse } from '@Admin/api'
import Loading from '@Admin/components/Loding'
import useMetaValidation from '@Admin/hooks/useMetaValidation'

function IntroduceManagement() {
  useMetaValidation()

  const { data, mutate } = useSWR<ProfileGETResponse>(ProfileAPI.get(), API, {
    loadingTimeout: 9000,
  })

  if (!data) {
    return <Loading />
  }

  const { data: profile } = data

  const onSave = async (name: string, value: string) => {
    await ProfileAPI.update({ ...profile, [name]: value })
    Notification.success('변경사항이 저장되었습니다.')
    mutate()
  }

  return (
    <AdminLayout
      title="프로필"
      subtitle="내 정보를 입력해주세요. 입력하지 않은 필드는 노출되지 않습니다."
    >
      <Row gutter={7}>
        <Col span={12}>
          <Card title="기본정보 (이름, 직책)" style={{ marginBottom: 7 }}>
            {PROFILE_SECTIONS.default.map((section) => (
              <EditableText
                name={section.name}
                icon={section.icon}
                type="text"
                key={section.name}
                placeholder={section.placeholder}
                initialValue={profile[section.name]}
                onSave={onSave}
              />
            ))}
          </Card>
        </Col>
        <Col span={12}>
          <Card title="연락처 (이메일, 핸드폰번호)" style={{ marginBottom: 7 }}>
            {PROFILE_SECTIONS.contact.map((section) => (
              <EditableText
                name={section.name}
                icon={section.icon}
                type="text"
                key={section.name}
                placeholder={section.placeholder}
                initialValue={profile[section.name]}
                onSave={onSave}
              />
            ))}
          </Card>
        </Col>
      </Row>

      <Card title="소셜 네트워크" style={{ marginBottom: 7 }}>
        {PROFILE_SECTIONS.social.map((section) => (
          <EditableText
            name={section.name}
            icon={section.icon}
            type="text"
            key={section.name}
            placeholder={section.placeholder}
            initialValue={profile[section.name]}
            onSave={onSave}
          />
        ))}
      </Card>
      <Card title="추가정보 (소개, 블로그, 홈페이지)">
        {PROFILE_SECTIONS.more.map((section) => (
          <EditableText
            name={section.name}
            icon={section.icon}
            type={section.name === 'about' ? 'textarea' : 'text'}
            key={section.name}
            placeholder={section.placeholder}
            initialValue={profile[section.name]}
            onSave={onSave}
          />
        ))}
      </Card>
    </AdminLayout>
  )
}

export default IntroduceManagement
