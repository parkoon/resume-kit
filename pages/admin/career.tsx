import AdminLayout from '@Admin/components/AdminLayout'
import ProjectForm from '@Admin/components/CareerForm'
import { Space, Typography, Button } from 'antd'
import { useState } from 'react'
import Modal from 'antd/lib/modal/Modal'
import { Career } from '@Shared/types/Career'
import moment from 'moment'
import { calcCareerYearAndMonth } from '@Shared/helpers'
import CareerDescription from '@Admin/components/CareerDesceiption'

const { Title } = Typography

const careers: Career[] = [
  {
    corp: '퀄슨 (퀄슨)',
    period: calcCareerYearAndMonth([moment(), moment('2021/02/22')]),
    startedAt: moment().toString(),
    resignedAt: moment('2021/02/22').toString(),
    position: '프론트엔드 개발자',
    resigned: true,
  },
  {
    corp: '퀄슨 (퀄슨)',
    period: calcCareerYearAndMonth([moment('2009/10/10')]),
    startedAt: moment().toString(),
    position: '프론트엔드 개발자',
    resigned: false,
  },
]

function ProjectManagement() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }
  return (
    <AdminLayout
      pageTitle={
        <Space style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
          <Title level={2} style={{ marginBottom: 0 }}>
            내가 성장 할 수 있었던 곳
          </Title>
          <Button type="primary" onClick={showModal}>
            만들기
          </Button>
        </Space>
      }
    >
      {careers.map((career, index) => (
        <CareerDescription key={index} career={career} />
      ))}
      <Modal
        title="내가 성장 할 수 있던 곳은 🏢"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        bodyStyle={{ maxHeight: '70vh', overflow: 'scroll' }}
        destroyOnClose
        footer={[
          <Button form="career" type="primary" key="submit" htmlType="submit">
            만들기
          </Button>,
        ]}
      >
        <ProjectForm id="career" />
      </Modal>
    </AdminLayout>
  )
}

export default ProjectManagement
