import { useRouter } from 'next/router'
import { Button, Result, Modal } from 'antd'

import ProjectForm from '@Admin/components/Forms/ProjectForm'
import ProjectPlayGround from '@Admin/components/ProjectPlayGround'
import { ProjectProvider } from '@Admin/components/ProjectPlayGround/context'
import useModal from '@Admin/hooks/useModal'
import AdminLayout from '@Admin/layout'
import { Career } from '@Shared/types/Career'
import useMetaValidation from '@Admin/hooks/useMetaValidation'

const careers: Career[] = [
  {
    id: 'fasfa',
    completed: true,
    startedAt: '2012/12',
    title: 'Qualson 1',
    endedAt: '2012/13',
    subtitle: 'hahaha',
  },
  {
    id: 'sadas',
    completed: true,
    startedAt: '2012/12',
    title: 'Qualson 2',
    endedAt: '2012/13',
    subtitle: 'hahaha',
  },
  {
    id: 'asdasd',
    completed: true,
    startedAt: '2012/12',
    title: 'Qualson 3',
    endedAt: '2012/13',
    subtitle: 'hahaha',
  },
]

function ProjectManagement() {
  useMetaValidation()

  const { visible, open, close } = useModal()
  const router = useRouter()

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
      subtitle="this is subtitle"
      actions={[
        <Button type="primary" onClick={open}>
          만들기
        </Button>,
      ]}
    >
      <ProjectProvider>
        <ProjectPlayGround />

        <Modal
          title="경험 만들기"
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
