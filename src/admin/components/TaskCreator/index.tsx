import React, { useState, useEffect, useRef } from 'react'
import { Input, Button, Popconfirm } from 'antd'

import randomId from '@Admin/helpers/randomId'

import { TaskWrapper, List, Title, Action } from './styles'
import { Task } from '@Shared/types/Project'
import useCallbackWithMount from '@Admin/hooks/useCallbackWithMount'

type ListCreatorProps = { items: Task[]; onChange(values: Task[]): void }
function TaskCreator({ items, onChange }: ListCreatorProps) {
  const [values, setValues] = useState<Task[]>(items)
  const [value, setValue] = useState('')

  const [updatingValue, setUpdatingValue] = useState<Task | null>(null)

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.keyCode !== 13) return
    if (!value) return

    setValues([...values, { id: randomId(), title: value }])
    setValue('')
    setUpdatingValue(null)
  }

  const remove = (id: string) => () => {
    setValues(values.filter((value) => value.id !== id))
  }

  const save = (id: string) => () => {
    setValues(
      values.map((value) => {
        if (value.id === id) {
          return {
            ...value,
            title: updatingValue!.title,
          }
        }
        return value
      })
    )
    setUpdatingValue(null)
  }

  useCallbackWithMount({
    watch: values,
    callback() {
      onChange(values)
    },
  })

  return (
    <>
      <Input
        value={value}
        onKeyUp={handleEnter}
        onFocus={() => setUpdatingValue(null)}
        onChange={(e) => setValue(e.target.value)}
        placeholder="업무 추가..."
      />
      <TaskWrapper>
        {values.map(({ id, title }) => (
          <List key={id}>
            {updatingValue && updatingValue.id === id ? (
              <>
                <Input
                  value={updatingValue.title}
                  onChange={(e) => {
                    setUpdatingValue({ id, title: e.target.value })
                  }}
                  autoFocus
                  style={{ marginBottom: 7 }}
                />
                <Action onClick={save(id)}>저장</Action>
                <Action onClick={() => setUpdatingValue(null)}>취소</Action>
              </>
            ) : (
              <>
                <Title>{title}</Title>
                <Action
                  onClick={() => {
                    console.log(id)
                    setUpdatingValue({
                      id,
                      title,
                    })
                  }}
                >
                  수정
                </Action>
                <Popconfirm
                  title="삭제하시겠습니까?"
                  okText="삭제"
                  cancelText="취소"
                  onConfirm={remove(id)}
                >
                  <Action>삭제</Action>
                </Popconfirm>
              </>
            )}
          </List>
        ))}
      </TaskWrapper>
    </>
  )
}

export default TaskCreator
