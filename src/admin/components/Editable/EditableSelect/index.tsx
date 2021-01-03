import React, { useState, useEffect } from 'react'
import HoverText from '../HoverText'
import { Select } from 'antd'

const { Option } = Select

type Option = { id: string; title: string }
type EditableSelectProps = {
  name: string
  options: Option[]
  onChange(name: string, value: string): void
  initialValue?: string
  style?: React.CSSProperties
}
function EditableSelect({ name, options, initialValue, style, onChange }: EditableSelectProps) {
  const [value, setValue] = useState(initialValue || '')
  const [isUpdateMode, setUpdateMode] = useState(false)

  useEffect(() => {
    initialValue && setValue(initialValue)
  }, [initialValue])

  const findValueFromOption = () => {
    try {
      return options.find((option) => option.id === value)!.title
    } catch (err) {
      alert(
        '생각지도 못한 에러가 발생했습니다.\n아마도 회사와 프로젝트를 연결하는 부분에서 생긴것 같습니다.'
      )
      return 'something went wrong'
    }
  }

  return (
    <>
      {isUpdateMode ? (
        <Select
          autoFocus
          defaultOpen
          style={{ width: '100%', ...style }}
          defaultValue={value}
          onChange={(value) => {
            setValue(value)
            onChange(name, value)
            setUpdateMode(false)
          }}
          onBlur={() => setUpdateMode(false)}
        >
          {options.map((option) => (
            <Option key={option.id} value={option.id}>
              {option.title}
            </Option>
          ))}
        </Select>
      ) : (
        <HoverText
          tooltip="클릭해서 변경하세요."
          onClick={() => setUpdateMode(true)}
          value={findValueFromOption()}
          size="sm"
        />
      )}
    </>
  )
}

export default EditableSelect
