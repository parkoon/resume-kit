import React, { useState, useEffect } from 'react'
import { Wrapper, Title, Level } from './styles'
import { Popover } from 'antd'

interface SkillCardProps extends React.HTMLAttributes<HTMLDivElement> {
  onLevelChange(level: number): void
  level: number
  title: string
}
function SkillCard({ title, level, onLevelChange, ...props }: SkillCardProps) {
  const [visibility, setVisibility] = useState(false)
  const handleVisibleChange = (status: boolean) => {
    setVisibility(status)
  }

  // Hide Popover Effect (When Level Changed)
  useEffect(() => {
    setVisibility(false)
  }, [level])

  return (
    <Wrapper {...props}>
      <Popover
        placement="top"
        content={
          <div style={{ display: 'flex' }}>
            <Level type="low" onClick={() => onLevelChange(1)}>
              1
            </Level>
            <Level type="mid" onClick={() => onLevelChange(2)}>
              2
            </Level>
            <Level type="high" onClick={() => onLevelChange(3)}>
              3
            </Level>
          </div>
        }
        title="당신의 스킬 수준"
        trigger="click"
        visible={visibility}
        onVisibleChange={handleVisibleChange}
      >
        <Level type={level === 3 ? 'high' : level === 2 ? 'mid' : 'low'}>{level}</Level>
      </Popover>
      <Title>{title}</Title>
    </Wrapper>
  )
}

export default SkillCard
