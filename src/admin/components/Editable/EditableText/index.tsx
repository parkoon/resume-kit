import React, { useState } from 'react'
import { Input, Tooltip, Button } from 'antd'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'

import { SaveFunc } from '@Admin/types/function'
import { ComponentSize } from '@Admin/types/size'

import { Wrapper, InputWrapper, ButtonWrapper, IconWrapper } from './styles'
import HoverText from '../HoverText'

const { TextArea } = Input

type EditableTextFieldProps = {
  name: string
  icon?: React.ReactNode
  type?: 'text' | 'textarea'
  initialValue?: string
  placeholder?: string
  onSave?: SaveFunc
  bold?: boolean
  size?: ComponentSize
}
function EditableText({
  name,
  icon,
  type = 'text',
  placeholder,
  initialValue,
  bold = false,
  size = 'md',
  onSave,
}: EditableTextFieldProps) {
  const [value, setValue] = useState(initialValue || '')
  const [isUpdateMode, setUpdateMode] = useState(false)

  const save = () => {
    // 처음 들어왔던 데이터랑 같다면 저장 할 필요 없음
    if (initialValue !== value) {
      typeof onSave === 'function' && onSave(name, value)
    }
    setUpdateMode(false)
  }

  const renderInput =
    type === 'text' ? (
      <Input
        name={name}
        autoFocus
        placeholder={value || placeholder}
        onBlur={save}
        onKeyUp={(e) => e.keyCode === 13 && save()}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    ) : (
      <TextArea
        name={name}
        autoFocus
        rows={7}
        placeholder={value || placeholder}
        onKeyUp={(e) => e.keyCode === 13 && save()}
        onBlur={save}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    )

  return (
    <Wrapper>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {isUpdateMode ? (
        <InputWrapper>
          {renderInput}
          <ButtonWrapper>
            <Button icon={<CheckOutlined />} onClick={save} />
          </ButtonWrapper>
        </InputWrapper>
      ) : (
        <HoverText
          tooltip="클릭해서 변경하세요."
          onClick={() => setUpdateMode(true)}
          value={value}
          bold={bold}
          size={size}
        />
      )}
    </Wrapper>
  )
}

export default EditableText
