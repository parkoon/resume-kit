import { Button, Modal } from 'antd'
import { useState } from 'react'
import useSWR from 'swr'

import { API, EducationAPI, EducationGETResponse } from '@Admin/api'
import CommonDescription from '@Admin/components/Descriptions/CommonDescription'
import CommonForm, { CommonFormValues } from '@Admin/components/Forms/CommonForm'
import useModal from '@Admin/hooks/useModal'
import AdminLayout from '@Admin/layout'
import { FormCompletedType } from '@Admin/types'
import { Education } from '@Shared/types/Education'
import confirm from '@Admin/helpers/confirm'

function EducationManagement() {
  const { open, close, visible } = useModal({
    afterClose() {
      setSelectedCareer(undefined)
    },
  })

  const { data: educationResponse, mutate } = useSWR<EducationGETResponse>(EducationAPI.get(), API)

  const [selectedCareer, setSelectedCareer] = useState<CommonFormValues>()

  const handleComplete = async (type: FormCompletedType, value: Education) => {
    if (type === 'add') {
      await EducationAPI.add(value)
    }

    if (type === 'modify') {
      await EducationAPI.update(value.id, value)
    }

    mutate()
    close()
  }

  if (!educationResponse) {
    return <span>로딩중</span>
  }

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
            confirm({
              title: '이 교육을 삭제하시겠습니까?',
              content: '이 항목을 삭제하면 영구적으로 제거됩니다.',
              async onConfirm() {
                await EducationAPI.delete(id)
                mutate()
              },
            })
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
        <CommonForm id="education" onComplete={handleComplete} initialValue={selectedCareer} />
      </Modal>
    </AdminLayout>
  )
}

export default EducationManagement
