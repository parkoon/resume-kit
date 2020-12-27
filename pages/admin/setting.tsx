import useSWR from 'swr'
import { Button, Card, Col, Divider, Modal, Row, Select, Tag } from 'antd'

import { API, MetaAPI, MetaGETResponse, SystemAPI, SystemGETResponse } from '@Admin/api'
import ColorBox from '@Admin/components/ColorBox'
import DeployForm from '@Admin/components/DeployForm'
import EditableText from '@Admin/components/Editable/EditableText'
import Loading from '@Admin/components/Loding'
import OpenGraphForm from '@Admin/components/OpenGraphForm'
import SectionEnableForm from '@Admin/components/SectionEnableForm'
import SectionSortForm from '@Admin/components/SectionSortForm'
import SettingField from '@Admin/components/SettingField'
import TagInput from '@Admin/components/TagInput'
import useDeploy from '@Admin/hooks/useDeploy'
import useModal from '@Admin/hooks/useModal'
import AdminLayout from '@Admin/layout'
import Space from '@Resume/components/atoms/Space'
import mainColors from '@Shared/theme/mainColors'
import { OGImage } from '@Shared/types/Meta'
import { SystemEnabled, SystemSort } from '@Shared/types/System'

const { Option } = Select

function SettingManagement() {
  const MetaSWR = useSWR<MetaGETResponse>(MetaAPI.get(), API, {
    loadingTimeout: 9000,
  })
  const SystemSWR = useSWR<SystemGETResponse>(SystemAPI.get(), API, {
    loadingTimeout: 9000,
  })

  const { visible, open, close } = useModal()
  const { deploy, loading, error, result } = useDeploy()

  if (!MetaSWR.data || !SystemSWR.data) {
    return <Loading />
  }

  const {
    data: { data: meta },
  } = MetaSWR

  const {
    data: { data: system },
  } = SystemSWR

  const onMetaSave = async (name: string, value: string | string[]) => {
    await MetaAPI.update({ ...meta, [name]: value })
    MetaSWR.mutate()
  }

  const createOpenGraphImage = async (values: OGImage) => {
    const {
      data: { filename },
    } = await MetaAPI.createOGImage(values)

    const { pathname } = new URL(meta.homepage)

    onMetaSave('image', `${pathname}/${filename}`)
  }

  const changeHomepageURL = async (name: string, value: string) => {
    await MetaAPI.updateHomage(value)
    onMetaSave(name, value)
  }

  const onEnableChange = async (value: SystemEnabled) => {
    await SystemAPI.updateEnable(value)
    SystemSWR.mutate()
  }

  const onSortChange = async (value: SystemSort) => {
    await SystemAPI.updateSort(value)
    SystemSWR.mutate()
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
      <Row gutter={12} style={{ height: '100%' }}>
        <Col span={12}>
          <Card title="메타 데이터 관리" style={{ marginBottom: 7, height: '100%' }}>
            <SettingField title="홈페이지">
              <EditableText
                name="homepage"
                type="text"
                placeholder="이력서 페이지의 주소를 입력해주세요. ex) github --> https://parkoon.github.com/resume"
                initialValue={homepage}
                onSave={changeHomepageURL}
              />
            </SettingField>

            <SettingField title="타이틀">
              <EditableText
                name="title"
                type="text"
                placeholder="이력서 페이지의 타이틀을 입력해주세요."
                initialValue={title}
                onSave={onMetaSave}
              />
            </SettingField>
            <SettingField title="설명">
              <EditableText
                name="description"
                type="text"
                placeholder="이력서 페이지의 설명을 입력해주세요."
                initialValue={description}
                onSave={onMetaSave}
              />
            </SettingField>

            <SettingField title="키워드">
              <TagInput
                initialValues={keywords}
                onChange={(values) => onMetaSave('keywords', values)}
              />
            </SettingField>

            <SettingField title="메인색상">
              <Select
                defaultValue={primaryColor}
                style={{ width: 130 }}
                onChange={(value) => onMetaSave('primaryColor', value)}
              >
                {mainColors.map((color) => (
                  <Option key={color.id} value={color.dark}>
                    <ColorBox color={color.dark} />
                  </Option>
                ))}
              </Select>
            </SettingField>

            <SettingField title="오픈 그래프 이미지 생성">
              <OpenGraphForm url="/og.png" onComplete={createOpenGraphImage} />
            </SettingField>
          </Card>
        </Col>

        <Col span={12}>
          <Card title="시스템 관리" style={{ marginBottom: 7, height: '100%' }}>
            <SettingField title="깃허브 페이지로 배포하기">
              <DeployForm />
            </SettingField>
            <SettingField title="페이지 활성화">
              <SectionEnableForm initialValue={system.enabled} onChange={onEnableChange} />
            </SettingField>

            <SettingField title="섹션 순서 변경하기">
              <SectionSortForm initialValue={system.sort} onChange={onSortChange} />
            </SettingField>
            <SettingField title="파일 히스토리">여기(TODO)</SettingField>
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

export default SettingManagement
