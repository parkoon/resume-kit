import jsonfile from 'jsonfile'
import moment from 'moment'
export const updateJSON = (path: string, data: Record<any, any>) => {
  jsonfile.writeFileSync(path, { [path.split('db/')[1].split('.')[0]]: data, updatedAt: moment() })
}
