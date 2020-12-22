import jsonfile from 'jsonfile'
import moment from 'moment'

const key = (path: string) => path.split('db/')[1].split('.')[0]
export const updateJSON = (path: string, data: Record<any, any>) => {
  try {
    jsonfile.writeFileSync(path, { [key(path)]: data, updatedAt: moment() }, { spaces: 4 })
  } catch (err) {
    throw new Error(err)
  }
}

export const readJSON = <T>(path: string): T => {
  try {
    const json = jsonfile.readFileSync(path)
    return json[key(path)]
  } catch (err) {
    throw new Error(err)
  }
}
