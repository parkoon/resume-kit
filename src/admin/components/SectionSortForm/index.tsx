import React, { useState, useEffect, useRef } from 'react'
import { Form, Switch, Row, Col, Card, Button } from 'antd'

import { SystemEnabled, SystemSort } from '@Shared/types/System'
import { UpCircleOutlined, UpOutlined, DownOutlined } from '@ant-design/icons'

import { Wrapper, Actions, Item } from './styles'

type SectionEnableFormProps = {
  initialValue: SystemSort
  onChange(value: SystemSort): void
}
function SectionSortForm({ initialValue, onChange }: SectionEnableFormProps) {
  const didMountRef = useRef(false)
  const [values, setValues] = useState(
    Object.keys(initialValue).sort(
      (a, b) => initialValue[a as keyof SystemSort] - initialValue[b as keyof SystemSort]
    )
  )

  const move = (name: string, direction: number) => {
    const index = values.indexOf(name)
    const newIndex = index + direction

    if (index < 0 || index === values.length) return

    const removed = [...values.slice(0, index), ...values.slice(index + 1, values.length)]
    const added = [...removed.slice(0, newIndex), name, ...removed.slice(newIndex, removed.length)]
    setValues(added)
  }

  useEffect(() => {
    if (didMountRef.current) {
      onChange(
        Object.keys(initialValue).reduce((prev, key) => {
          prev[key as keyof SystemSort] = values.indexOf(key)
          return prev
        }, {} as SystemSort)
      )
    } else {
      didMountRef.current = true
    }
  }, [values])
  return (
    <Wrapper>
      {values.map((value) => (
        <Item key={value}>
          <span>{value.toUpperCase()}</span>
          <Actions>
            <Button
              onClick={() => move(value, -1)}
              icon={<UpOutlined />}
              style={{ marginRight: 7 }}
            />
            <Button onClick={() => move(value, 1)} icon={<DownOutlined />} />
          </Actions>
        </Item>
      ))}
    </Wrapper>
  )
}

export default SectionSortForm
