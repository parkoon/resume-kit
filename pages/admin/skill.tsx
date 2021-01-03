import { useState } from 'react'
import useSWR from 'swr'
import { Row, Col, Button, Modal } from 'antd'

import AdminLayout from '@Admin/layout'
import SkillCard from '@Admin/components/SKillCard'
import DragContainer from '@Admin/components/DropContainer'
import { SkillType, skillTypes, Skill, SkillLevel } from '@Shared/types/Skill'
import { SkillAPI, API, SkillGETResponse } from '@Admin/api'
import Loading from '@Admin/components/Loding'
import useMetaValidation from '@Admin/hooks/useMetaValidation'
import Notification from '@Admin/helpers/notification'
import useModal from '@Admin/hooks/useModal'
import LevelGuide from '@Admin/components/Guide/LevelGuide'

function SkillManagement() {
  useMetaValidation()

  const [draggingSkill, setDraggingSkill] = useState<Skill>()
  const [dragoverField, setDragoverField] = useState<SkillType>()

  const { data, mutate } = useSWR<SkillGETResponse>(SkillAPI.get(), API)
  const { open, close, visible } = useModal()

  if (!data) {
    return <Loading />
  }

  const {
    data: { data: skills },
  } = data

  const handleDragStart = (skill: Skill) => () => {
    setDraggingSkill(skill)
  }

  const dragOver = (field: SkillType) => (e: React.DragEvent<HTMLDivElement>) => {
    setDragoverField(field)
    e.preventDefault()
  }

  const drop = async (type: SkillType) => {
    if (!draggingSkill) return

    const index = skills.findIndex((skill) => skill.id === draggingSkill.id)

    const updatedSkills = [
      ...skills.slice(0, index),
      ...skills.slice(index + 1),
      {
        ...draggingSkill,
        type,
      },
    ]

    await SkillAPI.update(updatedSkills)
    mutate()
    Notification.success('변경사항이 저장되었습니다.')
    setDraggingSkill(undefined)
    setDragoverField(undefined)
  }

  const handleLevelChange = async (id: number, level: SkillLevel) => {
    const updatedSkills = skills.map((skill) => {
      if (skill.id === id) {
        return {
          ...skill,
          level,
        }
      }
      return skill
    })
    await SkillAPI.update(updatedSkills)
    mutate()
    Notification.success('변경사항이 저장되었습니다.')
  }

  return (
    <AdminLayout
      title="다룰 수 있는 기술"
      subtitle="각 영역에 드래그 하고 기술 정도를 설정해주세요."
      actions={[
        <Button key="guide" type="primary" onClick={open}>
          레벨 가이드 보기
        </Button>,
      ]}
    >
      <Row style={{ margin: '2rem 0' }}>
        <Col span={24}>
          <DragContainer
            id="skills"
            title="SPEC SHEET"
            totalCount={skills.filter((skill) => skill.type === 'none').length}
            onDragOver={dragOver('none')}
            onDrop={() => drop('none')}
            dashed={draggingSkill && draggingSkill.type !== 'none'}
            hovered={dragoverField && dragoverField === 'none'}
          >
            {skills.map(
              (skill) =>
                skill.type === 'none' && (
                  <SkillCard
                    key={skill.id}
                    title={skill.title}
                    level={skill.level}
                    onLevelChange={(level) => handleLevelChange(skill.id, level)}
                    draggable
                    onDragStart={handleDragStart(skill)}
                  />
                )
            )}
          </DragContainer>
        </Col>
      </Row>

      <Row gutter={[12, 0]}>
        {skillTypes
          .filter((type) => type !== 'none')
          .map((type) => {
            return (
              <Col
                key={type}
                style={{
                  width: `calc(100% / ${skillTypes.filter((type) => type !== 'none').length})`,
                }}
              >
                <DragContainer
                  title={type.toUpperCase()}
                  totalCount={skills.filter((skill) => skill.type === type).length}
                  onDragOver={dragOver(type)}
                  onDrop={() => drop(type)}
                  dashed={draggingSkill && draggingSkill.type !== type}
                  hovered={dragoverField && dragoverField === type}
                >
                  {skills.map(
                    (skill) =>
                      skill.type === type && (
                        <SkillCard
                          key={skill.id}
                          title={skill.title}
                          level={skill.level}
                          onLevelChange={(level) => handleLevelChange(skill.id, level)}
                          draggable
                          onDragStart={handleDragStart(skill)}
                        />
                      )
                  )}
                </DragContainer>
              </Col>
            )
          })}
      </Row>

      <Modal
        title="레벨 가이드"
        visible={visible}
        onCancel={close}
        bodyStyle={{ height: '70vh', overflow: 'auto' }}
        footer={
          <Button key="back" onClick={close}>
            닫기
          </Button>
        }
      >
        <LevelGuide />
      </Modal>
    </AdminLayout>
  )
}

export default SkillManagement
