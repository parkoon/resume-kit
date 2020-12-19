import React, { useState } from 'react'
import moment, { Moment } from 'moment'

import { Wrapper } from './styles'
import { DatePicker } from 'antd'

const DATE_FORMAT = 'YYYY/MM'

function EditableDatePicker() {
  const [updateMode, setUpdateMode] = useState(false)
  const [value, setValue] = useState<Moment | null>(null)

  const save = (value: Moment | null) => {
    if (value) {
      setValue(value)
    }
    setUpdateMode(false)
  }

  const cancel = () => {
    setUpdateMode(true)
  }

  return (
    <Wrapper>
      {updateMode ? (
        <DatePicker
          format={DATE_FORMAT}
          picker="month"
          onChange={(value) => save(value)}
          onBlur={cancel}
          autoFocus
          defaultOpen
          defaultValue={value ? moment(value, DATE_FORMAT) : undefined}
          placeholder="예: 1990/9"
        />
      ) : (
        <div onClick={() => setUpdateMode(true)}>
          {value ? moment(value).format(DATE_FORMAT) : '없음'}
        </div>
      )}
    </Wrapper>
  )
}

export default EditableDatePicker
