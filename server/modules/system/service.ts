import { updateJSON, readJSON } from '@Server/helpers/JSONTool'
import { systemPath } from '@Server/paths'
import { SystemSort, SystemEnabled, System } from '@Shared/types/System'

const Service = {
  async getSystem() {
    try {
      const system = readJSON<System>(systemPath)
      return system
    } catch (err) {
      throw Error(err)
    }
  },
  async updateEnable(enabled: SystemEnabled) {
    try {
      const system = await this.getSystem()
      updateJSON(systemPath, {
        enabled,
        sort: system.sort,
      })
    } catch (err) {
      console.error(err)
      throw Error(err)
    }
  },
  async updateSort(sort: SystemSort) {
    try {
      const system = await this.getSystem()
      updateJSON(systemPath, {
        sort,
        enabled: system.enabled,
      })
    } catch (err) {
      console.error(err)
      throw Error(err)
    }
  },
}

export default Service
