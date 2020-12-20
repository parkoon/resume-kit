import jsonfile from 'jsonfile'

import { Project } from '@Shared/types/Project'

import { projectPath } from '../../paths'

const Service = {
  async getProject() {
    try {
      const project = jsonfile.readFileSync(projectPath)
      return project
    } catch (err) {
      throw new Error(err)
    }
  },
  async saveProject(project: Project) {
    try {
      jsonfile.writeFileSync(projectPath, project)
    } catch (err) {
      throw new Error(err)
    }
  },
}

export default Service
