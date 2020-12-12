import { useState } from 'react'
import { Row, Col } from 'antd'

import AdminLayout from '@Admin/components/AdminLayout'
import SkillCard from '@Admin/components/SKillCard'
import DragContainer from '@Admin/components/DropContainer'
import { SkillTitle, SkillType } from '@Shared/constants'

type Skill = {
  id: number
  title: SkillTitle
  type: SkillType
  level: number
}

function SkillManagement() {
  const [draggingSkill, setDraggingSkill] = useState<Skill>()
  const [dragoverField, setDragoverField] = useState<SkillType>()

  const [skills, setSkills] = useState<Skill[]>([
    { id: 1, title: 'Node.js', type: 'none', level: 1 },
    { id: 2, title: 'TypeScript', type: 'none', level: 1 },
    { id: 3, title: 'Express.js', type: 'none', level: 1 },
    { id: 4, title: 'AWS', type: 'none', level: 1 },
    { id: 5, title: 'nginx', type: 'none', level: 1 },
    { id: 6, title: 'Apache', type: 'none', level: 1 },
    { id: 7, title: 'PHP', type: 'none', level: 1 },
    { id: 8, title: 'Java', type: 'none', level: 1 },
    { id: 9, title: 'Spring', type: 'none', level: 1 },
    { id: 10, title: 'Python', type: 'none', level: 1 },
    { id: 11, title: 'C/C++', type: 'none', level: 1 },
    { id: 12, title: 'Database', type: 'none', level: 1 },
    { id: 13, title: 'Redis', type: 'none', level: 1 },
    { id: 14, title: 'MySQL', type: 'none', level: 1 },
    { id: 15, title: 'MongoDB', type: 'none', level: 1 },
    { id: 16, title: 'Oracle', type: 'none', level: 1 },
    { id: 17, title: 'Front-end', type: 'none', level: 1 },
    { id: 18, title: 'Next.js', type: 'none', level: 1 },
    { id: 19, title: 'React.js', type: 'none', level: 1 },
    { id: 20, title: 'javascript', type: 'none', level: 1 },
    { id: 21, title: 'HTML/CSS', type: 'none', level: 1 },
    { id: 23, title: 'Ubuntu', type: 'none', level: 1 },
    { id: 24, title: 'Vim', type: 'none', level: 1 },
    { id: 25, title: 'Security', type: 'none', level: 1 },
    { id: 26, title: 'VS Code', type: 'none', level: 1 },
    { id: 27, title: 'Jira', type: 'none', level: 1 },
    { id: 28, title: 'Confluence', type: 'none', level: 1 },
    { id: 29, title: 'Bitbucket', type: 'none', level: 1 },
    { id: 30, title: 'DevOps', type: 'none', level: 1 },
    { id: 31, title: 'Git / Github', type: 'none', level: 1 },
    { id: 32, title: 'Agile', type: 'none', level: 1 },
    { id: 33, title: 'Socket.io', type: 'none', level: 1 },
    { id: 34, title: 'Jenkins', type: 'none', level: 1 },
  ])

  const handleDragStart = (skill: Skill) => () => {
    setDraggingSkill(skill)
  }

  const dragOver = (field: SkillType) => (e: React.DragEvent<HTMLDivElement>) => {
    setDragoverField(field)
    e.preventDefault()
  }

  const drop = (type: SkillType) => {
    if (!draggingSkill) return

    const index = skills.findIndex((skill) => skill.id === draggingSkill.id)

    setSkills([
      ...skills.slice(0, index),
      ...skills.slice(index + 1),
      {
        ...draggingSkill,
        type,
      },
    ])

    setDraggingSkill(undefined)
    setDragoverField(undefined)
  }

  const handleLevelChange = (id: number, level: number) => {
    setSkills(
      skills.map((skill) => {
        if (skill.id === id) {
          return {
            ...skill,
            level,
          }
        }
        return skill
      })
    )
  }

  return (
    <AdminLayout>
      <Row style={{ margin: '2rem 0' }}>
        <Col>
          <DragContainer
            id="skills"
            title="Skill Set"
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

      <Row gutter={[0, 12]}>
        {skillTypes
          .filter((type) => type !== 'none')
          .map((type) => {
            return (
              <Col span={24}>
                <DragContainer
                  title={type}
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
    </AdminLayout>
  )
}

export default SkillManagement
