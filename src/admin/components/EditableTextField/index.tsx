import React, { useState } from 'react'
import { Input, Tooltip, Button } from 'antd'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'

import { Wrapper, TextWrapper, InputWrapper, ButtonWrapper, IconWrapper } from './styles'

const { TextArea } = Input

type EditableTextFieldProps = {
  icon?: React.ReactNode
  type?: 'text' | 'textarea'
  tooltipText?: string
  initialValue: string
  placeholder: string
  onSave(text: string): void
}
function EditableTextField({
  icon,
  type = 'text',
  tooltipText = 'Click to edit',
  placeholder,
  initialValue,
  onSave,
}: EditableTextFieldProps) {
  const [value, setValue] = useState(initialValue)
  const [isUpdateMode, setUpdateMode] = useState(false)

  const save = () => {
    onSave(value)
    setUpdateMode(false)
  }
  const cancel = () => {
    setUpdateMode(false)
  }

  const renderInput =
    type === 'text' ? (
      <Input
        placeholder={value || placeholder}
        onBlur={save}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    ) : (
      <TextArea
        rows={7}
        placeholder={value || placeholder}
        onBlur={save}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    )

  return (
    <Wrapper>
      <IconWrapper>{icon}</IconWrapper>
      {isUpdateMode ? (
        <InputWrapper>
          {renderInput}
          <ButtonWrapper>
            <Button icon={<CheckOutlined />} onClick={save} />
            <Button icon={<CloseOutlined />} onClick={cancel} />
          </ButtonWrapper>
        </InputWrapper>
      ) : (
        <Tooltip placement="topRight" title={tooltipText}>
          <TextWrapper onClick={() => setUpdateMode(true)} onlyPlaceholder={!value}>
            {value || placeholder}
          </TextWrapper>
        </Tooltip>
      )}
    </Wrapper>
  )
}

export default EditableTextField
