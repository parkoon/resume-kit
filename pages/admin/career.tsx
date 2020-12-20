import { useState, useEffect } from 'react'
import { Button, Modal } from 'antd'

import AdminLayout from '@Admin/layout'
import CommonDescription from '@Admin/components/Descriptions/CommonDescription'
import CommonForm from '@Admin/components/Forms/CommonForm'
import useModal from '@Admin/hooks/useModal'
import Notification from '@Admin/helpers/notification'
import { Career } from '@Shared/types/Career'
import useCallbackWithMount from '@Admin/hooks/useCallbackWithMount'

function ProjectManagement() {
  const { open, close, visible } = useModal({
    afterClose() {
      setSelectedCareer(undefined)
    },
  })
  const [careers, setCareers] = useState<Career[]>([])

  const [selectedCareer, setSelectedCareer] = useState<Career>()

  useCallbackWithMount({
    watch: careers,
    callback() {
      // TODO. API 호출
      console.log('educations', careers)
      Notification.success('변경사항이 적용되었습니다')
    },
  })

  useEffect(() => {
    if (selectedCareer) {
      open()
    }
  }, [selectedCareer])

  return (
    <AdminLayout
      title="내가 성장 할 수 있었던 곳"
      subtitle="this is subtitle"
      actions={[
        <Button type="primary" onClick={open}>
          만들기
        </Button>,
      ]}
    >
      {careers.map((career) => (
        <CommonDescription
          key={career.id}
          source={career}
          onModify={(id) => {
            const foundCareer = careers.find((career) => career.id === id)
            if (foundCareer) {
              setSelectedCareer(foundCareer)
            }
          }}
          onDelete={(id) => {
            setCareers(careers.filter((career) => career.id !== id))
          }}
        />
      ))}
      <Modal
        title="내가 성장 할 수 있던 곳은 🏢"
        visible={visible}
        onOk={close}
        onCancel={close}
        bodyStyle={{ maxHeight: '70vh', overflow: 'scroll' }}
        destroyOnClose
        footer={[
          <Button form="career" type="primary" key="submit" htmlType="submit">
            {selectedCareer ? '수정하기' : '만들기'}
          </Button>,
        ]}
      >
        <CommonForm
          id="career"
          onComplete={(type, values) => {
            if (type === 'add') {
              setCareers([...careers, values])
            } else {
              console.log('values', values)
              setCareers(careers.map((career) => (career.id === values.id ? values : career)))
            }
            close()
          }}
          initialValue={selectedCareer}
        />
      </Modal>
    </AdminLayout>
  )
}

export default ProjectManagement
