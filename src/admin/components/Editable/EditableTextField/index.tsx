import React, { useState } from 'react'
import { Input, Tooltip, Button } from 'antd'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
import { SaveFunc } from '@Admin/types/function'

import { Wrapper, InputWrapper, ButtonWrapper, IconWrapper } from './styles'
import HoverText from '../HoverText'

const { TextArea } = Input

type EditableTextFieldProps = {
  name: string
  icon?: React.ReactNode
  type?: 'text' | 'textarea'
  tooltipText?: string
  initialValue?: string
  placeholder?: string
  onSave?: SaveFunc
  bold?: boolean
}
function EditableTextField({
  name,
  icon,
  type = 'text',
  tooltipText = 'Click to edit',
  placeholder,
  initialValue,
  bold = false,
  onSave,
}: EditableTextFieldProps) {
  const [value, setValue] = useState(initialValue || '')
  const [isUpdateMode, setUpdateMode] = useState(false)

  const save = () => {
    // 처음 들어왔던 데이터랑 같다면 저장 할 필요 없음
    if (initialValue !== value && typeof onSave === 'function') {
      onSave(name, value)
    }
    setUpdateMode(false)
  }
  const cancel = () => {
    setUpdateMode(false)
  }

  const renderInput =
    type === 'text' ? (
      <Input
        name={name}
        autoFocus
        placeholder={value || placeholder}
        onBlur={save}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    ) : (
      <TextArea
        name={name}
        autoFocus
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
        <HoverText
          tooltip={tooltipText}
          onClick={() => setUpdateMode(true)}
          value={value || '없음'}
          bold
        />
      )}
    </Wrapper>
  )
}

export default EditableTextField
