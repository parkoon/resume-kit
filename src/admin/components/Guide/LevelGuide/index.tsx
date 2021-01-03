import React from 'react'
import { Typography } from 'antd'
import GuideSection from '../GuideSection'
import { palette } from '@Shared/styles'

const { Text } = Typography

function LevelGuide() {
  return (
    <>
      <GuideSection title="Senior developer" titleStyle={{ color: palette.level.senior }}>
        <Text>5+ years of work experience</Text> <br />
        <Text>problem solving</Text> <br />
        <Text>knowledge converted to intuition</Text> <br />
        <Text>a broad range of experience</Text> <br />
        <Text>mentorship for juniors</Text> <br />
        <Text>team's workflow coordination</Text> <br />
        <Text>understanding of the business values</Text> <br />
        <Text>long-term vision in terms of the project</Text> <br />
        <Text>good soft skills</Text> <br />
      </GuideSection>
      <GuideSection title="Middle developer" titleStyle={{ color: palette.level.middle }}>
        <Text>over 3years of work experience</Text> <br />
        <Text>little to no guidance</Text> <br />
        <Text>may be the source of advice</Text> <br />
        <Text>mostly write routine code</Text> <br />
        <Text>focus on a piece of the puzzle</Text> <br />
        <Text>actively collaborate with the team</Text> <br />
        <Text>initiative and resourceful</Text> <br />
      </GuideSection>
      <GuideSection title="Junior developer" titleStyle={{ color: palette.level.junior }}>
        <Text>1-3 years of work experience</Text> <br />
        <Text>close supervision</Text> <br />
        <Text>need context-free rules</Text> <br />
        <Text>code-focused</Text> <br />
        <Text>overlook the big picture</Text> <br />
        <Text>do the least complex tasks without much impact</Text> <br />
        <Text>on the final product</Text> <br />
        <Text>motivated and energetic</Text> <br />
      </GuideSection>
      <GuideSection title="Trainee" titleStyle={{ color: palette.level.trainee }}>
        <Text>no work experience</Text> <br />
        <Text>have experience to the side project</Text> <br />
        <Text>theoretical knowledge of programming</Text> <br />
        <Text>little to no exposure to the real development</Text> <br />
      </GuideSection>
    </>
  )
}

export default LevelGuide
