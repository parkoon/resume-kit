import { Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'

type ConfirmProps = { title?: string; onConfirm?(): void }

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
  invalidMeta({ onConfirm }: ConfirmProps) {
    Modal.confirm({
      title: `메타데이터가 입력되어 있지 않습니다.`,
      content: '데이터를 먼저 입력해주세요.',
      icon: <ExclamationCircleOutlined style={{ color: 'red' }} />,
      okText: '입력하기',
      onOk: onConfirm,
      cancelButtonProps: {
        hidden: true,
      },
    })
  },
}
export default Confirm
