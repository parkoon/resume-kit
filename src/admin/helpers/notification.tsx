import { notification } from 'antd'

import { CheckCircleOutlined } from '@ant-design/icons'
import { palette } from '@Shared/styles'

const Notification = {
  success(message: string, description?: string) {
    notification.open({
      message,
      description,
      icon: <CheckCircleOutlined style={{ color: palette.green[700] }} />,
      duration: 2,
    })
  },
}

export default Notification
