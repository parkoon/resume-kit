import jsonfile from 'jsonfile'
import { etcPath } from '../../paths'

const Service = {
  async getEtc() {
    try {
      const etc = jsonfile.readFileSync(etcPath)
      return etc
    } catch (err) {
      throw Error(err)
    }
  },
  async saveEtc(etc: any) {
    try {
      jsonfile.writeFileSync(etcPath, etc)
    } catch (err) {
      throw new Error(err)
    }
  },
}

export default Service
