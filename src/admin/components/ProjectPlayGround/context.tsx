import React, { useState } from 'react'
import useSWR from 'swr'

import { Project } from '@Shared/types/Project'
import { Career } from '@Shared/types/Career'
import { ProjectAPI, ProjectGETResponse, API } from '@Admin/api'

type ProjectContextProps = {
  projects: Project[]
  careers: Career[]
  currentProject: Project | null
  select(value: Project): void
  remove(id: string): void
  add(value: Project): void
  update(value: Project): void
}
const ProjectContext = React.createContext<ProjectContextProps>({} as ProjectContextProps)

type ProjectProviderProps = {
  children: React.ReactNode
}

export function ProjectProvider({ children }: ProjectProviderProps) {
  // const [projects, setProjects] = useState<Project[]>([])
  const { data, mutate } = useSWR<ProjectGETResponse>(ProjectAPI.get(), API)

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
  const [currentProject, setCurrentProject] = useState<Project | null>(null)

  const select = (value: Project) => {
    if (currentProject && currentProject.id === value.id) return
    setCurrentProject(value)
  }

  const update = async (value: Project) => {
    await ProjectAPI.updateById(value.id, value)
    mutate()
  }

  const add = async (value: Project) => {
    await ProjectAPI.add(value)
    mutate()
  }

  const remove = async (id: string) => {
    await ProjectAPI.delete(id)
    mutate()
    setCurrentProject(null)
  }

  return (
    <ProjectContext.Provider
      value={{
        careers,
        select,
        update,
        add,
        currentProject,
        remove,
        projects: data ? data.data : [],
      }}
    >
      {children}
    </ProjectContext.Provider>
  )
}

export default ProjectContext
