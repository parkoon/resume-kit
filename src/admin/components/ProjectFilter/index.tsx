import React, { useState, useEffect } from 'react'

import { Wrapper, Item } from './styles'

type Item = {
  id: number
  title: string
}
type ProjectFilterType = {
  onChange(ids: number[]): void
  items: Item[]
}

function ProjectFilter({ items, onChange }: ProjectFilterType) {
  const [selectedIds, setSelectedIds] = useState<number[]>([])

  const handleClick = (id: number) => () => {
    const index = selectedIds.indexOf(id)

    if (index < 0) {
      setSelectedIds([...selectedIds, id])
    } else {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id))
    }
  }

  useEffect(() => {
    onChange(selectedIds)
  }, [selectedIds])

  return (
    <Wrapper>
      {items.map((item) => (
        <Item
          key={item.id}
          onClick={handleClick(item.id)}
          selected={selectedIds.some((selectedId) => selectedId === item.id)}
        >
          {item.title}
        </Item>
      ))}
    </Wrapper>
  )
}

export default ProjectFilter
