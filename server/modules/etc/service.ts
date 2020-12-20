import jsonfile from 'jsonfile'
import { etcPath } from '../../paths'

const Service = {
  async getEtc() {
    try {
      const etc = jsonfile.readFileSync(etcPath)
      console.log(etc)
    } catch (err) {
      throw Error(err)
    }
  },
  async saveEtc() {},
}

export default Service
