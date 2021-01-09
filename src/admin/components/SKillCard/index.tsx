import React, { useEffect, useState } from 'react'
import { Popover } from 'antd'

import { SkillLevel } from '@Shared/types/Skill'

import { Title, Wrapper, PointerTag } from './styles'

interface SkillCardProps extends React.HTMLAttributes<HTMLDivElement> {
  onLevelChange(level: SkillLevel): void
  level?: SkillLevel
  title: string
}
function SkillCard({ title, level, onLevelChange, ...props }: SkillCardProps) {
  const [visibility, setVisibility] = useState(false)
  const handleVisibleChange = (status: boolean) => {
    setVisibility(status)
  }

  const levelColor = (level: SkillLevel) =>
    level === 'none'
      ? 'default'
      : level === 'trainee'
      ? 'red'
      : level === 'junior'
      ? 'orange'
      : level === 'middle'
      ? 'yellow'
      : 'green'

  // Hide Popover Effect (When Level Changed)
  useEffect(() => {
    setVisibility(false)
  }, [level])

  return (
    <Wrapper {...props}>
      {level && (
        <Popover
          placement="top"
          content={
            <div style={{ display: 'flex' }}>
              <PointerTag color={levelColor('none')} onClick={() => onLevelChange('none')}>
                None
              </PointerTag>
              <PointerTag color={levelColor('trainee')} onClick={() => onLevelChange('trainee')}>
                Trainee
              </PointerTag>
              <PointerTag color={levelColor('junior')} onClick={() => onLevelChange('junior')}>
                Junior
              </PointerTag>
              <PointerTag color={levelColor('middle')} onClick={() => onLevelChange('middle')}>
                Middle
              </PointerTag>
              <PointerTag color={levelColor('senior')} onClick={() => onLevelChange('senior')}>
                Senior
              </PointerTag>
            </div>
          }
          title="당신의 스킬 수준"
          trigger="hover"
          visible={visibility}
          onVisibleChange={handleVisibleChange}
        >
          <PointerTag color={levelColor(level)}>{level.charAt(0).toUpperCase()}</PointerTag>
        </Popover>
      )}

      <Title>{title}</Title>
    </Wrapper>
  )
}

export default SkillCard
