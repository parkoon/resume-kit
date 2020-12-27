import React from 'react'
import { Divider } from 'antd'

import { Wrapper } from './styles'

type SettingFieldProps = {
  title?: string
  children: React.ReactNode
  divider?: boolean
}
function SettingField({ title, children, divider = true }: SettingFieldProps) {
  return (
    <Wrapper>
      {title && <h3>{title}</h3>}
      {children}
      {divider && <Divider dashed style={{ margin: '14px 0' }} />}
    </Wrapper>
  )
}

export default SettingField
