import { useState, useEffect, useRef } from 'react'
import { Button, Modal } from 'antd'

import AdminLayout from '@Admin/layout'
import CommonDescription from '@Admin/components/Descriptions/CommonDescription'
import CommonForm, { CommonFormValues } from '@Admin/components/Forms/CommonForm'
import useModal from '@Admin/hooks/useModal'
import Notification from '@Admin/helpers/notification'

function EducationManagement() {
  const { open, close, visible } = useModal({
    afterClose() {
      setSelectedCareer(undefined)
    },
  })
  const [educations, setEducations] = useState<CommonFormValues[]>([])
  const didMountRef = useRef(false)

  const [selectedCareer, setSelectedCareer] = useState<CommonFormValues>()

  useEffect(() => {
    if (didMountRef.current) {
      // TODO. API 호출
      console.log('educations', educations)
      Notification.success('변경사항이 적용되었습니다')
    } else {
      didMountRef.current = true
    }
  }, [educations])

  useEffect(() => {
    if (selectedCareer) {
      open()
    }
  }, [selectedCareer])

  return (
    <AdminLayout
      title="나의 학문은 갈고닦은 곳"
      subtitle="다녔던 학교를 입력해주세요."
      actions={[
        <Button type="primary" onClick={open}>
          만들기
        </Button>,
      ]}
    >
      {educations.map((education) => (
        <CommonDescription
          key={education.id}
          source={education}
          onModify={(id) => {
            const foundCareer = educations.find((education) => education.id === id)
            if (foundCareer) {
              setSelectedCareer(foundCareer)
            }
          }}
          onDelete={(id) => {
            setEducations(educations.filter((education) => education.id !== id))
          }}
        />
      ))}
      <Modal
        title="학교 만들기 🏢"
        visible={visible}
        onOk={close}
        onCancel={close}
        bodyStyle={{ maxHeight: '70vh', overflow: 'scroll' }}
        destroyOnClose
        footer={[
          <Button form="education" type="primary" key="submit" htmlType="submit">
            {selectedCareer ? '수정하기' : '만들기'}
          </Button>,
        ]}
      >
        <CommonForm
          id="education"
          onComplete={(type, values) => {
            if (type === 'add') {
              setEducations([...educations, values])
            } else {
              console.log('values', values)
              setEducations(
                educations.map((education) => (education.id === values.id ? values : education))
              )
            }
            close()
          }}
          initialValue={selectedCareer}
        />
      </Modal>
    </AdminLayout>
  )
}

export default EducationManagement
