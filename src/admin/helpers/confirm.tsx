import { Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'

type ConfirmProps = { title: string; content: string; onConfirm?(): void }
function confirm({ title, content, onConfirm }: ConfirmProps) {
  Modal.confirm({
    title,
    content,
    icon: <ExclamationCircleOutlined />,
    okText: '삭제',
    cancelText: '취소',
    onOk: onConfirm,
    okButtonProps: {
      danger: true,
    },
  })
}
export default confirm
