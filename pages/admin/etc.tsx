import { useState, useEffect } from 'react'
import { Button, Modal } from 'antd'

import AdminLayout from '@Admin/layout'
import CommonDescription from '@Admin/components/Descriptions/CommonDescription'
import CommonForm, { CommonFormValues } from '@Admin/components/Forms/CommonForm'
import useModal from '@Admin/hooks/useModal'
import Notification from '@Admin/helpers/notification'
import useCallbackWithMount from '@Admin/hooks/useCallbackWithMount'

function EtcManagement() {
  const { open, close, visible } = useModal({
    afterClose() {
      setSelectedCareer(undefined)
    },
  })
  const [etcs, setEtcs] = useState<CommonFormValues[]>([])

  const [selectedCareer, setSelectedCareer] = useState<CommonFormValues>()

  useCallbackWithMount({
    watch: etcs,
    callback() {
      // TODO. API 호출
      console.log('etcs', etcs)
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
      title="기타 등등"
      subtitle="올림피아드, 봉사, 논문과 같은 기타 정보를 입력해주세요."
      actions={[
        <Button type="primary" onClick={open}>
          만들기
        </Button>,
      ]}
    >
      {etcs.map((education) => (
        <CommonDescription
          key={education.id}
          source={education}
          onModify={(id) => {
            const foundCareer = etcs.find((education) => education.id === id)
            if (foundCareer) {
              setSelectedCareer(foundCareer)
            }
          }}
          onDelete={(id) => {
            setEtcs(etcs.filter((education) => education.id !== id))
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
        <CommonForm
          id="etc"
          onComplete={(type, values) => {
            if (type === 'add') {
              setEtcs([...etcs, values])
            } else {
              setEtcs(etcs.map((education) => (education.id === values.id ? values : education)))
            }
            close()
          }}
          initialValue={selectedCareer}
        />
      </Modal>
    </AdminLayout>
  )
}

export default EtcManagement
