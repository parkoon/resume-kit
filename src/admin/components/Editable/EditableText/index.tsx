import React, { useState, useEffect } from 'react'
import { Input, Button } from 'antd'
import { CheckOutlined } from '@ant-design/icons'

import { SaveFunc, ComponentSize } from '@Admin/types'

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
  style?: React.CSSProperties
  allowSave?: boolean
}
function EditableText({
  name,
  icon,
  type = 'text',
  placeholder,
  initialValue,
  bold = false,
  size = 'md',
  allowSave = true,
  style,
  onSave,
}: EditableTextFieldProps) {
  const [value, setValue] = useState(initialValue || '')
  const [isUpdateMode, setUpdateMode] = useState(false)

  const save = () => {
    // 처음 들어왔던 데이터랑 같다면 저장 할 필요 없음
    if (initialValue !== value) {
      typeof onSave === 'function' && onSave(name, value.replace(/(?:\r\n|\r|\n)/g, '\n'))
    }
    setUpdateMode(false)
  }

  useEffect(() => {
    if (initialValue) {
      setValue(initialValue)
    }
  }, [initialValue])

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
        onBlur={save}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    )

  return (
    <Wrapper style={style}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {isUpdateMode ? (
        <InputWrapper>
          {renderInput}

          {allowSave && (
            <ButtonWrapper>
              <Button icon={<CheckOutlined />} onClick={save} />
            </ButtonWrapper>
          )}
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
