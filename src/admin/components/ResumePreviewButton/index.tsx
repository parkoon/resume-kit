import { Modal, Tooltip } from 'antd'
import React from 'react'
import { FileTextOutlined } from '@ant-design/icons'

import useModal from '@Admin/hooks/useModal'

import { IconWrapper, Iframe, Wrapper } from './styles'

function ResumePreviewButton() {
  const { visible, close, open } = useModal()

  return (
    <Wrapper>
      <Tooltip placement="left" title="이력서 미리보기">
        <IconWrapper>
          <FileTextOutlined onClick={open} />
        </IconWrapper>
      </Tooltip>

      <Modal
        visible={visible}
        onCancel={close}
        footer={null}
        width={1120}
        bodyStyle={{ height: '70vh', paddingTop: 52 }}
      >
        <Iframe key={Date.now()} src="http://localhost:1207" frameBorder="0" height="100vh" />
      </Modal>
    </Wrapper>
  )
}

export default ResumePreviewButton
