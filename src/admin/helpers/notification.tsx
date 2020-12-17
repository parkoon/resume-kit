import { notification } from 'antd'

import { CheckCircleOutlined } from '@ant-design/icons'

const Notification = {
  success(message: string, description?: string) {
    notification.open({
      message,
      description,
      icon: <CheckCircleOutlined />,
    })
  },
}

export default Notification
