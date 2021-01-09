import React from 'react'
import useSWR from 'swr'
import { Button, Select } from 'antd'

import { API, SkillAPI, SkillConfigGETResponse } from '@Admin/api'
import Confirm from '@Admin/helpers/confirm'

import EditableText from '../Editable/EditableText'
import * as S from './styles'

const { Option } = Select

type SkillFormProps = {
  id: string
  defaultSkills: string[]
  defaultTitle: string
  onDelete(id: string): void
  onSkillChange(id: string, values: string[]): void
  onTitleChange(id: string, title: string): void
}
function SkillForm({
  id,
  defaultSkills,
  defaultTitle,
  onDelete,
  onSkillChange,
  onTitleChange,
}: SkillFormProps) {
  const { data } = useSWR<SkillConfigGETResponse>(SkillAPI.getConfig(), API)

  if (!data) return null

  const { data: config } = data

  return (
    <S.Wrapper>
      <S.Header>
        <EditableText
          name="title"
          type="text"
          placeholder="스킬의 포지션을 입력해주세요. (ex, Frontend)"
          style={{ flex: 1, marginRight: 7 }}
          onSave={(_, value) => onTitleChange(id, value)}
          initialValue={defaultTitle}
          allowSave={false}
        />
        <Button
          type="dashed"
          danger
          onClick={() =>
            Confirm.delete({
              title: '포지션',
              onConfirm() {
                onDelete(id)
              },
            })
          }
        >
          지우기
        </Button>
      </S.Header>
      <S.Form>
        <Select
          mode="multiple"
          size="large"
          style={{ width: '100%' }}
          placeholder="Please select"
          defaultValue={defaultSkills}
          onChange={(values) => onSkillChange(id, values)}
        >
          {config.sheets.map((sheet) => (
            <Option key={sheet.id} value={sheet.title}>
              {sheet.title}
            </Option>
          ))}
        </Select>
      </S.Form>
    </S.Wrapper>
  )
}

export default SkillForm
