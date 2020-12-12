import { useState } from 'react'
import { Button, Space, Typography } from 'antd'
import Modal from 'antd/lib/modal/Modal'
import moment from 'moment'

import AdminLayout from '@Admin/components/AdminLayout'
import { Date, DateString } from '@Admin/components/CareerDatePicker'
import ExperienceForm from '@Admin/components/ExperienceForm'
import { calcCareerYearAndMonth } from '@Shared/helpers'
import ExperienceDescription from '@Admin/components/ExperienceDescription'
import { Experience } from '@Shared/types'

const { Title } = Typography
// 1. 달력으로 일한 기간 선택!
// 2. 재직중인지 퇴사했는지 토글 필요
// 3. 재직중이라면 현재까지 얼마나 일했는지 보여주면 좋을듯 (이건 파일로 관리못하고, 재직중인지 퇴사했는지 프론트에서 판단해서 보여주는게 맞을듯)
// 3. 회사 이름 및 직무 적기
// 4. 얼마동안 일했는지?
// 5. 회사에서 사용했던 스킬들을 나열
// 6. 회사에서 내가 무엇을 했는지
// 7. 업데이트 모드 읽기 보드 지원!
// 8. 회사 추가하기

const experiences: Experience[] = [
  {
    corp: '퀄슨 (퀄슨)',
    period: calcCareerYearAndMonth([moment(), moment('2021/02/22')]),
    startedAt: moment().toString(),
    resignedAt: moment('2021/02/22').toString(),
    position: '프론트엔드 개발자',
    resigned: true,
    skills: ['Node.js', 'Oracle', 'Python'],
    tasks: ['가나다라마바사', '아자차카타파다', '칼퇴근하기', '한시간일찍오기'],
  },
  {
    corp: '퀄슨 (퀄슨)',
    period: calcCareerYearAndMonth([moment('2009/10/10')]),
    startedAt: moment().toString(),
    position: '프론트엔드 개발자',
    resigned: false,
    skills: ['Node.js', 'Oracle', 'Python'],
    tasks: ['가나다라마바사', '아자차카타파다', '칼퇴근하기', '한시간일찍오기'],
  },
]

function ExperienceManagement() {
  const [resigned, setResigned] = useState(true)

  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

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
    <AdminLayout
      pageTitle={
        <Space style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
          <Title level={2} style={{ marginBottom: 0 }}>
            경험
          </Title>
          <Button type="primary" onClick={showModal}>
            만들기
          </Button>
        </Space>
      }
    >
      {experiences.map((experience, index) => (
        <ExperienceDescription key={index} experience={experience} />
      ))}

      {/* Experience Form Modal */}
      <Modal
        title="경험 만들기"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        bodyStyle={{ maxHeight: '70vh', overflow: 'scroll' }}
        destroyOnClose
        footer={[
          <Button form="experience" type="primary" key="submit" htmlType="submit">
            만들기
          </Button>,
        ]}
      >
        <ExperienceForm />
      </Modal>
    </AdminLayout>
  )
}

export default ExperienceManagement
