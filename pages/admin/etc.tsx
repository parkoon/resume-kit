import { Button } from 'antd'
import { useState } from 'react'
import moment from 'moment'
import Modal from 'antd/lib/modal/Modal'
import AdminLayout from '@Admin/layout'
import CommonForm from '@Admin/components/Forms/CommonForm'
import { CommonSection } from '@Shared/types/CommonSection'
import { calcCareerYearAndMonth } from '@Shared/helpers'
import CommonDescription from '@Admin/components/Descriptions/CommonDescription'
import EditableDescriptionWithSummary from '@Admin/components/EditableDescriptionWithSummary'

const etcs: CommonSection[] = [
  {
    title: '논문',
    subtitle: '블라블라한 논문',
    period: calcCareerYearAndMonth([moment(), moment('2021/02/22')]),
    startedAt: moment().toString(),
    completedAt: moment('2021/02/22').toString(),
    completed: true,
  },
  {
    title: '경연대회',
    period: calcCareerYearAndMonth([moment('2009/10/10')]),
    startedAt: moment().toString(),
    subtitle: '블라블라한 경연대회',
    completed: false,
  },
]

function EtcManagement() {
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
      title="기타"
      subtitle="this is subtitle"
      actions={[
        <Button type="primary" onClick={showModal}>
          만들기
        </Button>,
      ]}
    >
      <EditableDescriptionWithSummary />

      <Modal
        title="기타 만들기"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        bodyStyle={{ maxHeight: '70vh', overflow: 'scroll' }}
        destroyOnClose
        footer={[
          <Button form="etc" type="primary" key="submit" htmlType="submit">
            만들기
          </Button>,
        ]}
      >
        <CommonForm id="etc" />
      </Modal>
    </AdminLayout>
  )
}

export default EtcManagement
