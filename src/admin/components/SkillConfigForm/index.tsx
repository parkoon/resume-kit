import React, { useState } from 'react'
import { Divider, Input, Tag } from 'antd'
import styled from 'styled-components'
import useSWR from 'swr'

import { API, SkillAPI, SkillConfigResponse } from '@Admin/api'
import Notification from '@Admin/helpers/notification'
import randomId from '@Admin/helpers/randomId'

const TagBox = styled.div`
  margin-top: 12px;
  span {
    margin-bottom: 7px;
  }
`

function SkillSheetForm() {
  const [sheet, setSheet] = useState('')
  const [category, setCategory] = useState('')
  const { data, mutate } = useSWR<SkillConfigResponse>(SkillAPI.getConfig(), API)

  if (!data) return null

  const { data: config } = data

  const addSheet = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode !== 13) return

    await SkillAPI.addSheet({ id: randomId(), title: sheet })
    Notification.success('스킬이 등록되었습니다.')
    setSheet('')
    mutate()
  }

  const removeSheet = async (id: string) => {
    await SkillAPI.removeSheet(id)
    Notification.success('스킬이 삭제되었습니다.')
  }

  const addCategory = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode !== 13) return

    await SkillAPI.addCategory({ id: randomId(), title: category })
    Notification.success('스킬이 등록되었습니다.')
    setCategory('')
    mutate()
  }

  const removeCategory = async (id: string) => {
    await SkillAPI.removeCategory(id)
    Notification.success('스킬이 삭제되었습니다.')
  }

  return (
    <>
      <Input
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="포지션을 입력하고 엔터를 눌러주세요. (ex, Frontend)"
        onKeyDown={addCategory}
      />

      <TagBox>
        {config.categories.map((c) => (
          <Tag key={c.id} closable onClose={() => removeCategory(c.id)}>
            {c.title}
          </Tag>
        ))}
      </TagBox>

      <Divider />

      <Input
        value={sheet}
        onChange={(e) => setSheet(e.target.value)}
        placeholder="스킬을 입력하고 엔터를 눌러주세요. (ex, React.js)"
        onKeyDown={addSheet}
      />

      <TagBox>
        {config.sheets.map((s) => (
          <Tag key={s.id} closable onClose={() => removeSheet(s.id)}>
            {s.title}
          </Tag>
        ))}
      </TagBox>
    </>
  )
}

export default SkillSheetForm
