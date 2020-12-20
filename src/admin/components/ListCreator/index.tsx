import React, { useState, useEffect, useRef } from 'react'
import { Input, Button } from 'antd'

import randomId from '@Admin/helpers/randomId'

import { Wrapper } from './styles'
import { Task } from '@Shared/types/Project'
import useCallbackWithMount from '@Admin/hooks/useCallbackWithMount'

type ListCreatorProps = { items: Task[]; onChange(values: Task[]): void }
function ListCreator({ items, onChange }: ListCreatorProps) {
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
    <Wrapper>
      <Input
        value={value}
        onKeyUp={handleEnter}
        onFocus={() => setUpdatingValue(null)}
        onChange={(e) => setValue(e.target.value)}
      />
      <ul>
        {values.map(({ id, title }) => (
          <div key={id}>
            {updatingValue && updatingValue.id === id ? (
              <>
                <Input
                  value={updatingValue.title}
                  onChange={(e) => {
                    setUpdatingValue({ id, title: e.target.value })
                  }}
                  autoFocus
                />
                <Button type="text" onClick={save(id)}>
                  저장
                </Button>
                <Button type="text" onClick={() => setUpdatingValue(null)}>
                  취소
                </Button>
              </>
            ) : (
              <>
                <li>{title}</li>
                <Button
                  type="text"
                  onClick={() => {
                    console.log(id)
                    setUpdatingValue({
                      id,
                      title,
                    })
                  }}
                >
                  수정
                </Button>
                <Button type="text" onClick={remove(id)}>
                  삭제
                </Button>
              </>
            )}
          </div>
        ))}
      </ul>
    </Wrapper>
  )
}

export default ListCreator
