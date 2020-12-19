import { Tooltip } from 'antd'

import { Text } from './styles'

type HoverTextProps = {
  tooltip?: string
  value: string
  bold?: boolean
  onClick?(): void
}
function HoverText({ tooltip, value, bold, onClick }: HoverTextProps) {
  if (!tooltip) {
    return (
      <Text onClick={onClick} onlyPlaceholder={!value}>
        {value}
      </Text>
    )
  }
  return (
    <Tooltip placement="topRight" title={tooltip}>
      <Text onClick={onClick} onlyPlaceholder={!value} bold={bold}>
        {value}
      </Text>
    </Tooltip>
  )
}

export default HoverText
