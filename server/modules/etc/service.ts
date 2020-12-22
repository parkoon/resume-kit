import { readJSON, updateJSON } from '@Server/helpers/JSONTool'
import { Etc } from '@Shared/types/Etc'
import { etcPath } from '@Server/paths'

const Service = {
  async getAllEtcs() {
    try {
      const etcs = await readJSON<Etc[]>(etcPath)
      return etcs
    } catch (err) {
      throw new Error(err)
    }
  },
  async addEtc(etc: Etc) {
    try {
      const etcs = await this.getAllEtcs()
      updateJSON(etcPath, [...etcs, etc])
    } catch (err) {
      throw new Error(err)
    }
  },
  async deleteEtc(id: string) {
    try {
      const etcs = await this.getAllEtcs()
      updateJSON(
        etcPath,
        etcs.filter((etc) => etc.id !== id)
      )
    } catch (err) {
      throw new Error(err)
    }
  },
  async updateEtc(id: string, newEtc: Etc) {
    try {
      const etcs = await this.getAllEtcs()
      updateJSON(
        etcPath,
        etcs.map((etc) => (etc.id === id ? newEtc : etc))
      )
    } catch (err) {
      throw new Error(err)
    }
  },
}

export default Service
