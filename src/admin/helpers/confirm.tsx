import { Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'

type ConfirmProps = { title: string; onConfirm?(): void }

const Confirm = {
  delete({ title, onConfirm }: ConfirmProps) {
    Modal.confirm({
      title: `이 ${title}을 삭제하시겠습니까?`,
      content: '이 항목을 삭제하면 영구적으로 제거됩니다.',
      icon: <ExclamationCircleOutlined />,
      okText: '삭제',
      cancelText: '취소',
      onOk: onConfirm,
      okButtonProps: {
        danger: true,
      },
    })
  },
}
export default Confirm
