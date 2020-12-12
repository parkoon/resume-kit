import AdminLayout from '@Admin/components/AdminLayout'
import CareerDatePicker, { Date, DateString } from '@Admin/components/CareerDatePicker'
import { Switch, Input, Select } from 'antd'
import { HomeOutlined, IdcardOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { calcCareerYearAndMonth } from '@Shared/helpers'
import { Option } from 'antd/lib/mentions'
import { skillTitles } from '@Shared/constants'
import WhatDidIDo from '@Admin/components/WhatDidIdDo'

// 1. 달력으로 일한 기간 선택!
// 2. 재직중인지 퇴사했는지 토글 필요
// 3. 재직중이라면 현재까지 얼마나 일했는지 보여주면 좋을듯 (이건 파일로 관리못하고, 재직중인지 퇴사했는지 프론트에서 판단해서 보여주는게 맞을듯)
// 3. 회사 이름 및 직무 적기
// 4. 얼마동안 일했는지?
// 5. 회사에서 사용했던 스킬들을 나열
// 6. 회사에서 내가 무엇을 했는지
// 7. 업데이트 모드 읽기 보드 지원!
// 8. 회사 추가하기

function ExperienceManagement() {
  const [resigned, setResigned] = useState(true)

  const [dateString, setDateString] = useState<DateString>('')
  const [career, setCareer] = useState<{ years: number; months: number }>()

  const handleCareerDateChange = (date: Date, str: DateString) => {
    setDateString(str)

    if (date) {
      setCareer(calcCareerYearAndMonth(date))
    }
  }

  const handleSkillChange = (values: string[]) => {
    console.log(values)
  }
  return (
    <AdminLayout>
      <CareerDatePicker onChange={handleCareerDateChange} resigned={resigned} />
      <Switch
        onChange={(checked) => setResigned(!checked)}
        checkedChildren="재직중"
        unCheckedChildren="퇴사"
      />
      <Input size="large" placeholder="회사명 (ex, 퀄슨 (Qualson))" prefix={<HomeOutlined />} />
      <Input
        size="large"
        placeholder="직책 (ex, 개발팀 프론트엔드 개발자)"
        prefix={<IdcardOutlined />}
      />
      <span>
        얼마동안 일함..? {dateString}, {career?.years}년 {career?.months}개월
      </span>
      <Select
        mode="multiple"
        size="large"
        style={{ width: '100%' }}
        placeholder="회사에서 배운 기술을 선택해주세요."
        defaultValue={['zzz']}
        onChange={handleSkillChange}
        options={skillTitles.map((title) => ({ value: title }))}
      />

      <WhatDidIDo />
    </AdminLayout>
  )
}

export default ExperienceManagement
