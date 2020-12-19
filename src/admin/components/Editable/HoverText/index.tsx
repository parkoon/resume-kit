import { Tooltip } from 'antd'

import { ComponentSize } from '@Admin/types/size'

import { Text } from './styles'

type HoverTextProps = {
  tooltip?: string
  value: string
  bold?: boolean
  size?: ComponentSize
  onClick?(): void
}
function HoverText({ tooltip, value, bold, size, onClick }: HoverTextProps) {
  if (!tooltip) {
    return (
      <Text onClick={onClick} onlyPlaceholder={!value}>
        {value}
      </Text>
    )
  }
  return (
    <Tooltip placement="topRight" title={tooltip}>
      <Text onClick={onClick} onlyPlaceholder={!value} bold={bold} size={size}>
        {value}
      </Text>
    </Tooltip>
  )
}

export default HoverText
