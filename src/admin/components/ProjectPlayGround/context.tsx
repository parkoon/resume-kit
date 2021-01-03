import React, { useState } from 'react'
import useSWR from 'swr'

import { Project } from '@Shared/types/Project'
import { Career } from '@Shared/types/Career'
import {
  ProjectAPI,
  ProjectGETResponse,
  API,
  CareerAPI,
  CareerGETResponse,
  SkillGETResponse,
  SkillAPI,
} from '@Admin/api'
import Notification from '@Admin/helpers/notification'
import { Skill } from '@Shared/types/Skill'

type ProjectContextProps = {
  projects: Project[]
  careers: Career[]
  skills: Skill[]
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
  const { data: projectData, mutate } = useSWR<ProjectGETResponse>(ProjectAPI.get(), API)
  const { data: careerData } = useSWR<CareerGETResponse>(CareerAPI.get(), API)
  const { data: skillData } = useSWR<SkillGETResponse>(SkillAPI.get, API)

  const [currentProject, setCurrentProject] = useState<Project | null>(null)

  const select = (value: Project) => {
    if (currentProject && currentProject.id === value.id) return
    setCurrentProject(value)
  }

  const update = async (value: Project) => {
    await ProjectAPI.update(value.id, value)
    setCurrentProject(value)
    mutate()
    Notification.success('변경사항이 저장되었습니다.')
  }

  const add = async (value: Project) => {
    await ProjectAPI.add(value)
    mutate()
    Notification.success('변경사항이 저장되었습니다.')
  }

  const remove = async (id: string) => {
    await ProjectAPI.delete(id)
    mutate()
    setCurrentProject(null)
    Notification.success('변경사항이 저장되었습니다.')
  }

  return (
    <ProjectContext.Provider
      value={{
        select,
        update,
        add,
        currentProject,
        remove,
        careers: careerData ? careerData.data : [],
        projects: projectData ? projectData.data : [],
        skills: skillData ? skillData.data : [],
      }}
    >
      {children}
    </ProjectContext.Provider>
  )
}

export default ProjectContext
