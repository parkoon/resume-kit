import jsonfile from 'jsonfile'

import { Project } from '@Shared/types/Project'
import { readJSON, updateJSON } from '@Server/helpers/JSONTool'
import { projectPath } from '@Server/paths'

const Service = {
  async getAllProjects() {
    try {
      const projects = readJSON<Project[]>(projectPath)
      return projects
    } catch (err) {
      throw new Error(err)
    }
  },
  async updateProject(project: Project) {
    try {
      jsonfile.writeFileSync(projectPath, project)
    } catch (err) {
      throw new Error(err)
    }
  },
  async addProject(project: Project) {
    try {
      const projects = await this.getAllProjects()
      updateJSON(projectPath, [...projects, project])
    } catch (err) {
      throw new Error(err)
    }
  },
  async updateProjectById(id: string, newProject: Project) {
    try {
      const projects = await this.getAllProjects()
      updateJSON(
        projectPath,
        projects.map((project) => (project.id === id ? newProject : project))
      )
    } catch (err) {
      throw new Error(err)
    }
  },
  async deleteProject(id: string) {
    try {
      const projects = await this.getAllProjects()
      const filteredProjects = projects.filter((project) => project.id !== id)
      updateJSON(projectPath, filteredProjects)
    } catch (err) {
      throw new Error(err)
    }
  },
}

export default Service
