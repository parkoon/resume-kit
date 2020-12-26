import useSWR from 'swr'
import { Card, Row, Col, Select, Button, Modal, Tag, Divider } from 'antd'

import AdminLayout from '@Admin/layout'
import EditableText from '@Admin/components/Editable/EditableText'
import Notification from '@Admin/helpers/notification'
import { API, MetaGETResponse, MetaAPI } from '@Admin/api'
import Loading from '@Admin/components/Loding'
import mainColors from '@Shared/theme/mainColors'
import ColorBox from '@Admin/components/ColorBox'
import Space from '@Resume/components/atoms/Space'
import TagInput from '@Admin/components/TagInput'
import OpenGraphForm from '@Admin/components/OpenGraphForm'
import { OGImage } from '@Shared/types/Meta'
import useModal from '@Admin/hooks/useModal'

const { Option } = Select

function MetaManagement() {
  const { data, mutate } = useSWR<MetaGETResponse>(MetaAPI.get(), API, {
    loadingTimeout: 9000,
  })

  const { visible, open, close } = useModal()

  if (!data) {
    return <Loading />
  }

  const {
    data: { data: meta },
  } = data

  const onSave = async (name: string, value: string | string[]) => {
    await MetaAPI.update({ ...meta, [name]: value })
    Notification.success('변경사항이 저장되었습니다.')
    mutate()
  }

  const createOpenGraphImage = async (values: OGImage) => {
    const {
      data: { filename },
    } = await MetaAPI.createOGImage(values)

    const { pathname } = new URL(meta.homepage)

    onSave('image', `${pathname}/${filename}`)
  }

  const changeHomepageURL = async (name: string, value: string) => {
    await MetaAPI.updateHomage(value)
    onSave(name, value)
  }
  const { title, description, keywords, primaryColor, homepage } = meta

  return (
    <AdminLayout
      title="설정"
      subtitle="웹 페이지를 표현할 데이터를 입력하세요. SEO 및 배포에 영향이 있을 수 있으니 정확하게 입력해주세요."
      actions={[
        <Button type="primary" onClick={open}>
          작성 가이드 보기
        </Button>,
      ]}
    >
      <Row style={{ height: '100%' }}>
        <Col span={24}>
          <Card title="메타 데이터" style={{ marginBottom: 7, height: '100%' }}>
            <EditableText
              name="homepage"
              type="text"
              label="홈페이지"
              placeholder="이력서 페이지의 주소를 입력해주세요. ex) github --> https://parkoon.github.com/resume"
              initialValue={homepage}
              onSave={changeHomepageURL}
            />
            <Divider />

            <EditableText
              name="title"
              type="text"
              label="타이틀"
              placeholder="이력서 페이지의 타이틀을 입력해주세요."
              initialValue={title}
              onSave={onSave}
            />
            <Divider />

            <EditableText
              name="description"
              type="text"
              label="설명"
              placeholder="이력서 페이지의 설명을 입력해주세요."
              initialValue={description}
              onSave={onSave}
            />
            <Divider />

            <h3>키워드</h3>
            <TagInput initialValues={keywords} onChange={(values) => onSave('keywords', values)} />
            <Divider />

            <h3>메인 색상</h3>
            <Select
              defaultValue={primaryColor}
              style={{ width: 130 }}
              onChange={(value) => onSave('primaryColor', value)}
            >
              {mainColors.map((color) => (
                <Option key={color.id} value={color.dark}>
                  <ColorBox color={color.dark} />
                </Option>
              ))}
            </Select>
            <Divider />

            <h3>오픈 그래프 이미지 생성</h3>
            <OpenGraphForm url="/og.png" onComplete={createOpenGraphImage} />
          </Card>
        </Col>
      </Row>

      <Modal
        title="메타 데이터 작성 가이드"
        visible={visible}
        onCancel={close}
        footer={
          <Button key="back" onClick={close}>
            닫기
          </Button>
        }
      >
        <Space>
          <h3>
            홈페이지 <span style={{ color: 'red' }}>*</span>
          </h3>
          <p>
            <Tag color="volcano">package.json</Tag>의 <Tag color="volcano">homepage</Tag>필드의 값을
            설정합니다.
            <Tag color="volcano">github-page</Tag>로 배포를 한다면 필수로 입력해야합니다.
            <Tag color="volcano">github-page</Tag>로 배포를 하게된다면,
            <Tag color="volcano">https://[githubname].github.io/[repo]</Tag>를 입력하면 됩니다.
            <br />
            ex) https://parkoon.github.io/resume
          </p>
          <Divider />
          <h3>타이틀</h3>
          <p>
            홈페이지의 타이틀을 설정합니다. 해당 필드의 값이 없다면 탭에 <br />
            <Tag color="volcano">https://...</Tag>이 노출됩니다.
          </p>
          <Divider />
          <h3>설명</h3>
          <p>홈페이지의 설명을 설정합니다. SEO에 도움이 됩니다.</p>
          <Divider />
          <h3>키워드</h3>
          <p>홈페이지의 키워드을 설정합니다. SEO에 도움이 됩니다.</p>
          <Divider />

          <h3>메인색상</h3>
          <p>
            홈페이지의 메인 색상 설정합니다. 홈페이지의 상/하단 띠 및 타이틀, 서브타이틀과 같은
            색상을 설정합니다.
          </p>
          <Divider />
          <h3>오픈 그래프 이미지</h3>
          <p>
            홈페이지의 공유 이미지를 설정합니다. 다른 사람에게 카카오나 SNS 로 URL 을 공유할 때
            보여질 이미지를 설정합니다. 특별한 이미지를 가지고 있지않다면 타이틀과 서브타이틀을
            조합해 기본 이미지를 생성해서 제공하고 있습니다. 이미지를 가지고 있다면
            <Tag color="volcano">/public/og.png</Tag>파일을 변경해주시면 됩니다.
          </p>
        </Space>
      </Modal>
    </AdminLayout>
  )
}

export default MetaManagement
