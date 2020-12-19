import React from 'react'

import Summary from './Summary'
import EditableDescription from './EditableDescription'

import { Wrapper } from './styles'

function EditableDescriptionWithSummary() {
  return (
    <Wrapper>
      <Summary />
      <EditableDescription />
    </Wrapper>
  )
}

export default EditableDescriptionWithSummary
