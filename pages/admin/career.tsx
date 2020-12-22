import { Button, Modal } from 'antd'
import { useState } from 'react'
import useSWR from 'swr'

import { API, CareerAPI, CareerGETResponse } from '@Admin/api'
import CommonDescription from '@Admin/components/Descriptions/CommonDescription'
import CommonForm from '@Admin/components/Forms/CommonForm'
import confirm from '@Admin/helpers/confirm'
import useModal from '@Admin/hooks/useModal'
import AdminLayout from '@Admin/layout'
import { FormCompletedType } from '@Admin/types'
import { Career } from '@Shared/types/Career'

function ProjectManagement() {
  const { open, close, visible } = useModal({
    afterClose() {
      setSelectedCareer(undefined)
    },
  })
  const { data: careerResponse, mutate } = useSWR<CareerGETResponse>(CareerAPI.get(), API)

  const [selectedCareer, setSelectedCareer] = useState<Career>()

  const handleComplete = async (type: FormCompletedType, value: Career) => {
    if (type === 'add') {
      await CareerAPI.add(value)
      mutate()
    } else {
      await CareerAPI.update(value.id, value)
      mutate()
    }
    close()
  }

  if (!careerResponse) {
    return <span>로딩중</span>
  }

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
      {careerResponse.data.map((career) => (
        <CommonDescription
          key={career.id}
          source={career}
          onModify={(id) => {
            const foundCareer = careerResponse.data.find((career) => career.id === id)
            if (foundCareer) {
              setSelectedCareer(foundCareer)
              open()
            }
          }}
          onDelete={(id: string) =>
            confirm({
              title: '이 경력을 삭제하시겠습니까?',
              content: '이 항목을 삭제하면 영구적으로 제거됩니다.',
              onConfirm() {
                CareerAPI.delete(id)
                mutate()
              },
            })
          }
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
        <CommonForm id="career" onComplete={handleComplete} initialValue={selectedCareer} />
      </Modal>
    </AdminLayout>
  )
}

export default ProjectManagement
