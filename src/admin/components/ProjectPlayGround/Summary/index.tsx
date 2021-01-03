import React, { useContext } from 'react'

import { Wrapper, Body, Item } from './styles'
import ProjectContext from '../context'
import { periodify } from '@Shared/helpers'

function Summary() {
  const { projects, select, currentProject } = useContext(ProjectContext)
  return (
    <Wrapper>
      <Body>
        {projects.map((project) => {
          const isSelectedProject = currentProject && currentProject.id === project.id
          return (
            <Item key={project.id} onClick={() => select(project)} selected={!!isSelectedProject}>
              <h3>{project.title}</h3>
              <span className="where">{project.where.title}</span>
              <span style={{ fontStyle: 'italic' }}>
                {periodify(project.startedAt, project.endedAt)}
              </span>
            </Item>
          )
        })}
      </Body>
    </Wrapper>
  )
}

export default Summary
