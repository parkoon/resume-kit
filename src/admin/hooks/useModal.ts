import { useState } from 'react'

type useModalProps = {
  afterClose?(): void
}
function useModal({ afterClose }: useModalProps = {}) {
  const [visible, setVisible] = useState(false)
  const open = () => {
    setVisible(true)
  }
  const close = () => {
    setVisible(false)
    afterClose && afterClose()
  }
  return {
    visible,
    open,
    close,
  }
}

export default useModal
