import React, { useContext } from 'react'
import { Pagination } from 'antd'

import { Wrapper, Body, Item, Footer } from './styles'
import ProjectContext from '../context'

function Summary() {
  const { projects, select } = useContext(ProjectContext)
  return (
    <Wrapper>
      <Body>
        {projects.map((project) => (
          <Item key={project.id} onClick={() => select(project)}>
            <h3>{project.title}</h3>
            <span>{project.where.title}</span>
          </Item>
        ))}
      </Body>
      <Footer>
        <Pagination simple total={projects.length} />
      </Footer>
    </Wrapper>
  )
}

export default Summary
