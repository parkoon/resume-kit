import React, { useState } from 'react'

import { Project } from '@Shared/types/Project'

type ProjectContextProps = {
  projects: Project[]
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
    <ProjectContext.Provider value={{ select, update, add, projects, currentProject }}>
      {children}
    </ProjectContext.Provider>
  )
}

export default ProjectContext
