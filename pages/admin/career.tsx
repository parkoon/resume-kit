import { Button, Modal } from 'antd'
import { useState, useContext } from 'react'
import useSWR from 'swr'

import { API, CareerAPI, CareerGETResponse, ProjectGETResponse, ProjectAPI } from '@Admin/api'
import CommonDescription from '@Admin/components/CommonDescription'
import CommonForm from '@Admin/components/Forms/CommonForm'
import Confirm from '@Admin/helpers/confirm'
import useModal from '@Admin/hooks/useModal'
import AdminLayout from '@Admin/layout'
import { FormCompletedType } from '@Admin/types'
import { Career } from '@Shared/types/Career'
import Loading from '@Admin/components/Loding'
import useMetaValidation from '@Admin/hooks/useMetaValidation'
import Notification from '@Admin/helpers/notification'
import ProjectContext from '@Admin/components/ProjectPlayGround/context'

function CareerManagement() {
  useMetaValidation()

  const { open, close, visible } = useModal({
    afterClose() {
      setSelectedCareer(undefined)
    },
  })
  const { data: careerResponse, mutate } = useSWR<CareerGETResponse>(CareerAPI.get(), API)
  const { data: projectResponse } = useSWR<ProjectGETResponse>(ProjectAPI.get(), API)

  const [selectedCareer, setSelectedCareer] = useState<Career>()

  const handleComplete = async (type: FormCompletedType, value: Career) => {
    close()

    if (type === 'add') {
      await CareerAPI.add(value)
    }
    if (type === 'modify') {
      await CareerAPI.update(value.id, value)
    }
    mutate()
    Notification.success('변경사항이 저장되었습니다.')
  }

  const hasProject = (id: string) => {
    if (!projectResponse) return
    return projectResponse.data.some((project) => project.where.id === id)
  }

  const deleteCareer = (id: string) => {
    if (hasProject(id)) {
      return alert('해당 회사로 등록되어 있는 프로젝트가 있습니다.\n프로젝트를 먼저 삭제해주세요.')
    }
    Confirm.delete({
      title: '경력',
      async onConfirm() {
        await CareerAPI.delete(id)
        mutate()
        Notification.success('변경사항이 저장되었습니다.')
      },
    })
  }

  if (!careerResponse) {
    return <Loading />
  }

  return (
    <AdminLayout
      title="내가 성장 할 수 있었던 곳"
      subtitle="지금까지 다녔거나 다니고 있는 회사를 입력해주세요."
      actions={[
        <Button key="button" type="primary" onClick={open}>
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
          onDelete={deleteCareer}
        />
      ))}
      <Modal
        title="회사 만들기"
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

export default CareerManagement
