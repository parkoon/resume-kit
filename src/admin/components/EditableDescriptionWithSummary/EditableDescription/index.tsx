import React from 'react'
import { Select, Space, Typography } from 'antd'

import EditableTextField from '@Admin/components/Editable/EditableTextField'
import { skillTitles } from '@Shared/constants'
import ListCreator from '@Admin/components/ListCreator'
import EditableDatePicker from '@Admin/components/Editable/EditableDatePicker'

import { Wrapper, Title, Section, Body } from './styles'
function EditableDescription() {
  return (
    <Wrapper>
      <EditableTextField
        name="title"
        type="text"
        initialValue="팝송패키지 구매의 경우 이지펜 관련 안내문구가 노출"
        bold
        size="lg"
      />

      <Body>
        <Section>
          <Title>회사</Title>
          <EditableTextField
            name="corp"
            type="text"
            placeholder="예: 퀄슨 (Qualson)"
            initialValue=""
            size="sm"
          />
        </Section>
        <Section>
          <Title>시작일</Title>
          <EditableDatePicker size="sm" />
        </Section>
        <Section>
          <Title>종료일</Title>
          <EditableDatePicker size="sm" />
        </Section>
        <Section>
          <Title>설명</Title>
          <EditableTextField
            name="title"
            type="textarea"
            initialValue="팝송패키지 구매의 경우 이지펜 관련 안내문구가 노출"
            size="sm"
          />
        </Section>
        <Section>
          <Title>스펙</Title>
          <div style={{ marginLeft: '11px', marginTop: '7px' }}>
            <Select
              mode="multiple"
              style={{ width: '100%' }}
              placeholder="프로젝트에 사용된 기술을 선택해주세요."
              onChange={(values) => {
                console.log(values)
              }}
              options={skillTitles.map((title) => ({ value: title }))}
            />
          </div>
        </Section>

        <Section>
          <Title>업무</Title>
          <div style={{ marginLeft: '11px', marginTop: '7px' }}>
            <ListCreator />
          </div>
        </Section>
      </Body>
    </Wrapper>
  )
}

export default EditableDescription
