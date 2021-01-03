import { Button, Modal } from 'antd'
import { useState } from 'react'
import useSWR from 'swr'

import { API, EducationAPI, EducationGETResponse } from '@Admin/api'
import CommonDescription from '@Admin/components/CommonDescription'
import CommonForm, { CommonFormValues } from '@Admin/components/Forms/CommonForm'
import useModal from '@Admin/hooks/useModal'
import AdminLayout from '@Admin/layout'
import { FormCompletedType } from '@Admin/types'
import { Education } from '@Shared/types/Education'
import Confirm from '@Admin/helpers/confirm'
import Loading from '@Admin/components/Loding'
import useMetaValidation from '@Admin/hooks/useMetaValidation'
import Notification from '@Admin/helpers/notification'

function EducationManagement() {
  useMetaValidation()

  const { open, close, visible } = useModal({
    afterClose() {
      setSelectedCareer(undefined)
    },
  })

  const { data: educationResponse, mutate } = useSWR<EducationGETResponse>(EducationAPI.get(), API)

  const [selectedCareer, setSelectedCareer] = useState<CommonFormValues>()

  const handleComplete = async (type: FormCompletedType, value: Education) => {
    close()

    if (type === 'add') {
      await EducationAPI.add(value)
    }

    if (type === 'modify') {
      await EducationAPI.update(value.id, value)
    }

    mutate()
    Notification.success('변경사항이 저장되었습니다.')
  }

  if (!educationResponse) {
    return <Loading />
  }

  return (
    <AdminLayout
      title="나의 학문은 갈고닦은 곳"
      subtitle="다녔던 학교를 입력해주세요."
      actions={[
        <Button key="button" type="primary" onClick={open}>
          만들기
        </Button>,
      ]}
    >
      {educationResponse.data.map((education) => (
        <CommonDescription
          key={education.id}
          source={education}
          onModify={(id) => {
            const foundCareer = educationResponse.data.find((education) => education.id === id)
            if (foundCareer) {
              setSelectedCareer(foundCareer)
              open()
            }
          }}
          onDelete={(id) => {
            Confirm.delete({
              title: '교육',
              async onConfirm() {
                await EducationAPI.delete(id)
                mutate()
                Notification.success('변경사항이 저장되었습니다.')
              },
            })
          }}
        />
      ))}
      <Modal
        title="교육 만들기"
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
        <CommonForm id="education" onComplete={handleComplete} initialValue={selectedCareer} />
      </Modal>
    </AdminLayout>
  )
}

export default EducationManagement
