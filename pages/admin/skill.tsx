import { Row, Col } from 'antd'
import styled from 'styled-components'
import { useState } from 'react'

import { tuple } from '@Shared/helpers'
import AdminLayout from '@Admin/components/AdminLayout'
import SkillCard from '@Admin/components/SKillCard'

const Container = styled.div`
  h2 {
    font-weight: bold;
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background: #333;
  min-height: 4rem;
  padding: 1rem;
  border-radius: 4px;
`
interface DragContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  title: string
}
function DragContainer({ children, title, ...props }: DragContainerProps) {
  return (
    <Container {...props}>
      <h2>{title}</h2>

      <Wrapper>{children}</Wrapper>
    </Container>
  )
}

const skillTypes = tuple('none', 'backend', 'frontend', 'database', 'etc', 'devOps')
type SkillType = typeof skillTypes[number]
type Skill = {
  id: number
  title: string
  type: SkillType
  level: number
}

function SkillManagement() {
  const [draggingTag, setDraggingTag] = useState<Skill | null>(null)

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
    setDraggingTag(skill)
  }

  const handleDragEnd = () => {
    setDraggingTag(null)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const drop = (type: SkillType) => {
    if (!draggingTag) return

    const index = skills.findIndex((skill) => skill.id === draggingTag.id)

    setSkills([
      ...skills.slice(0, index),
      ...skills.slice(index + 1),
      {
        ...draggingTag,
        type,
      },
    ])
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
      <Row style={{ marginBottom: '2rem' }}>
        <Col>
          <DragContainer
            id="skills"
            title="Skill Set"
            onDragOver={handleDragOver}
            onDrop={() => drop('none')}
          >
            {skills.map(
              (skill, index) =>
                skill.type === 'none' && (
                  <SkillCard
                    key={skill.id}
                    title={skill.title}
                    level={skill.level}
                    onLevelChange={(level) => handleLevelChange(skill.id, level)}
                    draggable
                    onDragStart={handleDragStart(skill)}
                    onDragEnd={handleDragEnd}
                  />
                )
            )}
          </DragContainer>
        </Col>
      </Row>

      <Row>
        {skillTypes
          .filter((type) => type !== 'none')
          .map((type) => {
            return (
              <Col span={24}>
                <DragContainer title={type} onDragOver={handleDragOver} onDrop={() => drop(type)}>
                  {skills.map(
                    (skill, index) =>
                      skill.type === type && (
                        <SkillCard
                          key={skill.id}
                          title={skill.title}
                          level={skill.level}
                          onLevelChange={(level) => handleLevelChange(skill.id, level)}
                          draggable
                          onDragStart={handleDragStart(skill)}
                          onDragEnd={handleDragEnd}
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
