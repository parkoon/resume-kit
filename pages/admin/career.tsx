import AdminLayout from '@Admin/layout'
import { Space, Typography, Button } from 'antd'
import { useState } from 'react'
import Modal from 'antd/lib/modal/Modal'
import moment from 'moment'
import { calcCareerYearAndMonth } from '@Shared/helpers'
import CommonDescription from '@Admin/components/Descriptions/CommonDescription'
import CommonForm from '@Admin/components/Forms/CommonForm'

function ProjectManagement() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [careers, setCareers] = useState([
    {
      title: '퀄슨 (퀄슨)',
      subtitle: '프론트엔드 개발자',
      period: calcCareerYearAndMonth([moment(), moment('2021/02/22')]),
      startedAt: moment().toString(),
      completedAt: moment('2021/02/22').toString(),
      completed: true,
    },
    {
      title: '퀄슨 (퀄슨)',
      period: calcCareerYearAndMonth([moment('2009/10/10')]),
      startedAt: moment().toString(),
      subtitle: '프론트엔드 개발자',
      completed: false,
    },
  ])

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
      title="내가 성장 할 수 있었던 곳"
      subtitle="this is subtitle"
      actions={[
        <Button type="primary" onClick={showModal}>
          만들기
        </Button>,
      ]}
    >
      {careers.map((career, index) => (
        <CommonDescription key={index} type="career" source={career} />
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
        <CommonForm id="career" />
      </Modal>
    </AdminLayout>
  )
}

export default ProjectManagement
