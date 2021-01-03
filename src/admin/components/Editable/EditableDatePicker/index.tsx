import React, { useState, useEffect } from 'react'
import moment, { Moment } from 'moment'
import { DatePicker } from 'antd'

import { DATE_FORMAT } from '@Admin/constants/date'
import { ComponentSize, SaveFunc } from '@Admin/types'

import { Wrapper } from './styles'
import HoverText from '../HoverText'

type EditableDatePickerProps = {
  name: string
  size?: ComponentSize
  initialValue: string
  onSave: SaveFunc
}
function EditableDatePicker({ name, size = 'md', initialValue, onSave }: EditableDatePickerProps) {
  const [updateMode, setUpdateMode] = useState(false)
  const [value, setValue] = useState<Moment | null>(moment(initialValue))

  useEffect(() => {
    initialValue && setValue(moment(initialValue))
  }, [initialValue])

  const save = (value: Moment | null) => {
    if (value) {
      setValue(value)
      onSave(name, moment(value).format(DATE_FORMAT))
    }
    setUpdateMode(false)
  }

  const cancel = () => {
    setUpdateMode(false)
  }

  return (
    <Wrapper>
      {updateMode ? (
        <DatePicker
          name={name}
          format={DATE_FORMAT}
          picker="month"
          onChange={(value) => save(value)}
          onBlur={cancel}
          autoFocus
          defaultOpen
          defaultValue={value ? value : undefined}
          placeholder="예: 1990/9"
        />
      ) : (
        <HoverText
          value={value ? moment(value).format(DATE_FORMAT) : '없음'}
          onClick={() => setUpdateMode(true)}
          size={size}
        />
      )}
    </Wrapper>
  )
}

export default EditableDatePicker
