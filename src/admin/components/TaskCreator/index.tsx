import React, { useState } from 'react'
import { Input, Popconfirm } from 'antd'

import randomId from '@Admin/helpers/randomId'

import { TaskWrapper, List, Title, Action } from './styles'
import { Task } from '@Shared/types/Project'

type ListCreatorProps = { items: Task[]; onChange(values: Task[]): void }
function TaskCreator({ items, onChange }: ListCreatorProps) {
  const [value, setValue] = useState('')

  const [updatingValue, setUpdatingValue] = useState<Task | null>(null)

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.keyCode !== 13) return
    if (!value) return

    onChange([...items, { id: randomId(), title: value }])
    setValue('')
    setUpdatingValue(null)
  }

  const remove = (id: string) => () => {
    onChange(items.filter((item) => item.id !== id))
  }

  const save = (id: string) => () => {
    onChange(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            title: updatingValue!.title,
          }
        }
        return item
      })
    )
    setUpdatingValue(null)
  }

  return (
    <>
      <Input
        value={value}
        onKeyUp={handleEnter}
        onFocus={() => setUpdatingValue(null)}
        onChange={(e) => setValue(e.target.value)}
        placeholder="업무를 입력하고 엔터키를 눌러주세요."
        style={{ width: 320 }}
      />
      <TaskWrapper>
        {items.map(({ id, title }) => (
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
