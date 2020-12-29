import { useState } from 'react'
import useSWR from 'swr'
import { Button, Modal } from 'antd'

import { API, EtcAPI, EtcGETResponse } from '@Admin/api'
import CommonDescription from '@Admin/components/CommonDescription'
import CommonForm, { CommonFormValues } from '@Admin/components/Forms/CommonForm'
import useModal from '@Admin/hooks/useModal'
import AdminLayout from '@Admin/layout'
import { FormCompletedType } from '@Admin/types'
import { Etc } from '@Shared/types/Etc'
import Loading from '@Admin/components/Loding'
import useMetaValidation from '@Admin/hooks/useMetaValidation'

function EtcManagement() {
  useMetaValidation()

  const { open, close, visible } = useModal({
    afterClose() {
      setSelectedCareer(undefined)
    },
  })
  const { data: etcResponse, mutate } = useSWR<EtcGETResponse>(EtcAPI.get(), API)

  const [selectedCareer, setSelectedCareer] = useState<CommonFormValues>()

  const handleComplete = async (type: FormCompletedType, value: Etc) => {
    if (type === 'add') {
      await EtcAPI.add(value)
    }
    if (type === 'modify') {
      await EtcAPI.update(value.id, value)
    }
    mutate()
    close()
  }

  if (!etcResponse) {
    return <Loading />
  }

  return (
    <AdminLayout
      title="기타 등등"
      subtitle="올림피아드, 봉사, 논문과 같은 기타 정보를 입력해주세요."
      actions={[
        <Button key="button" type="primary" onClick={open}>
          만들기
        </Button>,
      ]}
    >
      {etcResponse.data.map((education) => (
        <CommonDescription
          key={education.id}
          source={education}
          onModify={(id) => {
            const foundCareer = etcResponse.data.find((education) => education.id === id)
            if (foundCareer) {
              setSelectedCareer(foundCareer)
              close()
            }
          }}
          onDelete={async (id) => {
            await EtcAPI.delete(id)
            mutate()
          }}
        />
      ))}
      <Modal
        title="기타 만들기"
        visible={visible}
        onOk={close}
        onCancel={close}
        bodyStyle={{ maxHeight: '70vh', overflow: 'scroll' }}
        destroyOnClose
        footer={[
          <Button form="etc" type="primary" key="submit" htmlType="submit">
            {selectedCareer ? '수정하기' : '만들기'}
          </Button>,
        ]}
      >
        <CommonForm id="etc" onComplete={handleComplete} initialValue={selectedCareer} />
      </Modal>
    </AdminLayout>
  )
}

export default EtcManagement
