import { Button } from 'antd'
import { useState } from 'react'
import Modal from 'antd/lib/modal/Modal'
import AdminLayout from '@Admin/components/AdminLayout'
import CommonForm from '@Admin/components/Forms/CommonForm'

function EducationManagement() {
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
      pageTitle="교육"
      pageAction={
        <Button type="primary" onClick={showModal}>
          만들기
        </Button>
      }
    >
      <Modal
        title="교육 만들기"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        bodyStyle={{ maxHeight: '70vh', overflow: 'scroll' }}
        destroyOnClose
        footer={[
          <Button form="education" type="primary" key="submit" htmlType="submit">
            만들기
          </Button>,
        ]}
      >
        <CommonForm id="education" />
      </Modal>
    </AdminLayout>
  )
}

export default EducationManagement
