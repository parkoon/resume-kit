import React from 'react'

import Summary from './Summary'
import EditableDescription from './EditableDescription'
import { Wrapper } from './styles'

function ProjectPlayGround() {
  return (
    <Wrapper>
      <Summary />
      <EditableDescription />
    </Wrapper>
  )
}

export default ProjectPlayGround
