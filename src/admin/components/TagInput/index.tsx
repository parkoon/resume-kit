import React, { useState, useEffect, useRef } from 'react'

import * as S from './styles'
import { Input, Tag } from 'antd'

type TagInputProps = {
  initialValues: string[]
  onChange(values: string[]): void
}
function TagInput({ initialValues, onChange }: TagInputProps) {
  const [values, setValues] = useState(initialValues || [])
  const [value, setValue] = useState('')
  const didMountRef = useRef(false)

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.keyCode !== 13) return

    setValues([...values, value])
    setValue('')
  }
  const handleClose = (targetValue: string) => {
    setValues(values.filter((value) => value !== targetValue))
  }

  useEffect(() => {
    if (didMountRef.current) {
      onChange(values)
    } else {
      didMountRef.current = true
    }
  }, [values])
  return (
    <S.Wrapper>
      <Input
        style={{ width: 130 }}
        onKeyDown={handleEnter}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <S.TagWrapper>
        {values.map((value, index) => (
          <Tag key={`${value}#${value}`} closable onClose={() => handleClose(value)}>
            {value}
          </Tag>
        ))}
      </S.TagWrapper>
    </S.Wrapper>
  )
}

export default TagInput
