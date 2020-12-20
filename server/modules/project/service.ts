import jsonfile from 'jsonfile'
import { projectPath } from '../../paths'

const Service = {
  async getProject() {
    try {
      const project = jsonfile.readFileSync(projectPath)
      console.log(project)
    } catch (err) {
      console.log('??', err)
    }
  },
  async saveProject() {},
}

export default Service
