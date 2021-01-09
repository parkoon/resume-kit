import useSWR from 'swr'
import { Button, Col, Modal, Row } from 'antd'

import { API, SkillAPI, SkillGETResponse } from '@Admin/api'
import DashedAddButton from '@Admin/components/DashedAddButton'
import LevelGuide from '@Admin/components/Guide/LevelGuide'
import Loading from '@Admin/components/Loding'
import SkillConfigForm from '@Admin/components/SkillConfigForm'
import SkillForm from '@Admin/components/SkillForm'
import randomId from '@Admin/helpers/randomId'
import useMetaValidation from '@Admin/hooks/useMetaValidation'
import useModal from '@Admin/hooks/useModal'
import AdminLayout from '@Admin/layout'
import { Skill } from '@Shared/types/Skill'
import Notification from '@Admin/helpers/notification'

function SkillManagement() {
  useMetaValidation()

  const { data, mutate } = useSWR<SkillGETResponse>(SkillAPI.get(), API)

  const guideModal = useModal()
  const addModal = useModal()

  if (!data) {
    return <Loading />
  }

  const { data: skills } = data

  const addSkill = async () => {
    const skill: Skill = {
      id: randomId(),
      position: '',
      values: [],
    }
    await SkillAPI.add(skill)
    mutate()
    Notification.success('변경사항이 저장되었습니다.')
  }

  const deleteSkill = async (id: string) => {
    await SkillAPI.delete(id)
    mutate()
    Notification.success('변경사항이 저장되었습니다.')
  }

  const updateSkill = async (id: string, skills: string[]) => {
    await SkillAPI.update(id, { id, values: skills })
    mutate()
    Notification.success('변경사항이 저장되었습니다.')
  }

  const updateSkillTitle = async (id: string, title: string) => {
    await SkillAPI.update(id, { id, position: title })
    mutate()
    Notification.success('변경사항이 저장되었습니다.')
  }

  return (
    <AdminLayout
      title="다룰 수 있는 기술"
      subtitle="아래 추가 버튼을 눌러 포지션을 추가하고 스킬을 입력해주세요."
      actions={[
        <Button key="add" type="primary" onClick={addModal.open}>
          스킬 등록하기
        </Button>,
        // <Button key="guide" onClick={guideModal.open}>
        //   레벨 가이드 보기
        // </Button>,
      ]}
    >
      <DashedAddButton onClick={addSkill} style={{ marginBottom: 42 }} />

      <Row gutter={[12, 24]}>
        {skills.map((skill) => (
          <Col key={skill.id} span={12}>
            <SkillForm
              id={skill.id}
              onDelete={deleteSkill}
              onSkillChange={updateSkill}
              onTitleChange={updateSkillTitle}
              defaultSkills={skill.values}
              defaultTitle={skill.position}
            />
          </Col>
        ))}
      </Row>
      <Modal
        title="레벨 가이드"
        visible={guideModal.visible}
        onCancel={guideModal.close}
        bodyStyle={{ height: '70vh', overflow: 'auto' }}
        footer={
          <Button key="back" onClick={guideModal.close}>
            닫기
          </Button>
        }
      >
        <LevelGuide />
      </Modal>

      <Modal
        title="스킬 관리"
        visible={addModal.visible}
        onCancel={addModal.close}
        bodyStyle={{ height: '70vh', overflow: 'auto' }}
        footer={
          <Button key="back" onClick={addModal.close}>
            닫기
          </Button>
        }
      >
        <SkillConfigForm />
      </Modal>
    </AdminLayout>
  )
}

export default SkillManagement
