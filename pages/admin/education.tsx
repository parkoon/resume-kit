import { Button } from 'antd'
import { useState } from 'react'
import moment from 'moment'
import Modal from 'antd/lib/modal/Modal'
import AdminLayout from '@Admin/components/AdminLayout'
import CommonForm from '@Admin/components/Forms/CommonForm'
import { CommonSection } from '@Shared/types/CommonSection'
import { calcCareerYearAndMonth } from '@Shared/helpers'
import CommonDescription from '@Admin/components/Descriptions/CommonDescription'

const educations: CommonSection[] = [
  {
    title: '가천대학교',
    subtitle: '컴퓨터 공학 전공 학사 졸업',
    period: calcCareerYearAndMonth([moment(), moment('2021/02/22')]),
    startedAt: moment().toString(),
    completedAt: moment('2021/02/22').toString(),
    completed: true,
  },
  {
    title: '동화고등학교',
    period: calcCareerYearAndMonth([moment('2009/10/10')]),
    startedAt: moment().toString(),
    subtitle: '자연계 졸업 (경기도 남양주시)',
    completed: false,
  },
]

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
      {educations.map((education, index) => (
        <CommonDescription key={index} type="education" source={education} />
      ))}
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
