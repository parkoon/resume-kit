import shell from 'shelljs'

import { updateJSON, readJSON } from '@Server/helpers/JSONTool'
import { systemPath, metaPath } from '@Server/paths'
import { SystemSort, SystemEnabled, System, SystemJSON } from '@Shared/types/System'
import { Meta } from '@Shared/types/Meta'

const Service = {
  async getSystem() {
    try {
      const { data } = readJSON<SystemJSON>(systemPath)
      return data
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
  async deploy() {
    const result = shell.exec('npm run deploy')

    if (result.code !== 0) {
      throw Error(result)
    }

    const { homepage } = readJSON<Meta>(metaPath)
    return homepage
  },
}

export default Service
