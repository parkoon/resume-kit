import useSWR from 'swr'
import { useRouter } from 'next/router'
import { Button, Result, Modal } from 'antd'

import ProjectForm from '@Admin/components/Forms/ProjectForm'
import ProjectPlayGround from '@Admin/components/ProjectPlayGround'
import { ProjectProvider } from '@Admin/components/ProjectPlayGround/context'
import useModal from '@Admin/hooks/useModal'
import AdminLayout from '@Admin/layout'
import useMetaValidation from '@Admin/hooks/useMetaValidation'
import { CareerAPI, API, CareerGETResponse } from '@Admin/api'
import Loading from '@Admin/components/Loding'

function ProjectManagement() {
  useMetaValidation()

  const { visible, open, close } = useModal()
  const router = useRouter()

  // TODO. 등록된 회사가 있는지 확인 할 수 있는 API 로 대체하는게 나을듯!
  const { data } = useSWR<CareerGETResponse>(CareerAPI.get(), API)

  if (!data) {
    return <Loading />
  }

  const { data: careers } = data

  if (!Boolean(careers.length)) {
    return (
      <AdminLayout title="나의 프로젝트" subtitle="지금까지 내가 당담했던 프로젝트를 입력해주세요.">
        <Result
          style={{
            height: '100%',
            paddingTop: 150,
          }}
          status="500"
          title="프로젝트 등록 오류"
          subTitle="프로젝트를 등록하기 전에 회사를 등록해주세요"
          extra={
            <Button type="primary" onClick={() => router.push('/admin/career')}>
              등록하기
            </Button>
          }
        />
      </AdminLayout>
    )
  }

  return (
    <AdminLayout
      title="나의 프로젝트"
      subtitle="경험했던 프로젝트를 입력해주세요."
      actions={[
        <Button key="button" type="primary" onClick={open}>
          만들기
        </Button>,
      ]}
    >
      <ProjectProvider>
        <ProjectPlayGround />

        <Modal
          title="프로젝트 만들기"
          visible={visible}
          onOk={close}
          onCancel={close}
          bodyStyle={{ maxHeight: '70vh', overflow: 'scroll' }}
          destroyOnClose
          footer={[
            <Button form="project" type="primary" key="submit" htmlType="submit">
              만들기
            </Button>,
          ]}
        >
          <ProjectForm id="project" onComplete={close} />
        </Modal>
      </ProjectProvider>
    </AdminLayout>
  )
}

export default ProjectManagement
