import { Tooltip } from 'antd'

import { ComponentSize } from '@Admin/types'

import { Text } from './styles'

type HoverTextProps = {
  tooltip?: string
  value: string
  bold?: boolean
  size?: ComponentSize
  onClick?(): void
}
function HoverText({ tooltip, value, onClick, ...props }: HoverTextProps) {
  if (!tooltip) {
    return (
      <Text onClick={onClick} onlyPlaceholder={!value} {...props}>
        {value || '없음'}
      </Text>
    )
  }
  return (
    <Tooltip placement="topRight" title={tooltip}>
      <Text onClick={onClick} onlyPlaceholder={!value} {...props}>
        {value || '없음'}
      </Text>
    </Tooltip>
  )
}

export default HoverText
