import React, { useState } from 'react'
import { Input, Tag } from 'antd'
import styled from 'styled-components'
import useSWR from 'swr'

import { API, SkillAPI, SkillConfigGETResponse } from '@Admin/api'
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
  const { data, mutate } = useSWR<SkillConfigGETResponse>(SkillAPI.getConfig(), API)

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

  return (
    <>
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
