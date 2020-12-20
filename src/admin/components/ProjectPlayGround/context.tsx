import React, { useState } from 'react'

import { Project } from '@Shared/types/Project'
import { Career } from '@Shared/types/Career'

type ProjectContextProps = {
  projects: Project[]
  careers: Career[]
  currentProject?: Project
  select(value: Project): void
  add(value: Project): void
  update(value: Project): void
}
const ProjectContext = React.createContext<ProjectContextProps>({} as ProjectContextProps)

type ProjectProviderProps = {
  children: React.ReactNode
}

export function ProjectProvider({ children }: ProjectProviderProps) {
  const [projects, setProjects] = useState<Project[]>([])
  const [careers, setCareers] = useState<Career[]>([
    {
      id: 'fasfa',
      completed: true,
      startedAt: '2012/12',
      title: 'Qualson 1',
      endedAt: '2012/13',
      subtitle: 'hahaha',
    },
    {
      id: 'sadas',
      completed: true,
      startedAt: '2012/12',
      title: 'Qualson 2',
      endedAt: '2012/13',
      subtitle: 'hahaha',
    },
    {
      id: 'asdasd',
      completed: true,
      startedAt: '2012/12',
      title: 'Qualson 3',
      endedAt: '2012/13',
      subtitle: 'hahaha',
    },
  ])
  const [currentProject, setCurrentProject] = useState<Project>()

  const select = (value: Project) => {
    if (currentProject && currentProject.id === value.id) return
    setCurrentProject(value)
  }

  const update = (value: Project) => {
    setProjects(projects.map((project) => (project.id === value.id ? value : project)))
  }

  const add = (value: Project) => {
    setProjects([...projects, value])
  }

  return (
    <ProjectContext.Provider value={{ careers, select, update, add, projects, currentProject }}>
      {children}
    </ProjectContext.Provider>
  )
}

export default ProjectContext
