import moment, { Moment } from 'moment'

export const tuple = <T extends string[]>(...args: T) => args
export const calcCareerYearAndMonth = (dates: Moment | Moment[]) => {
  if (!dates) return

  if (Array.isArray(dates) && dates.length !== 2) {
    console.warn('dates length must be 2 [startDate, endDate]')
    return
  }

  const startDate = Array.isArray(dates) ? dates[0] : dates
  const endDate = Array.isArray(dates) ? dates[1] : moment()

  const years = endDate.diff(startDate, 'years')
  startDate.add(years, 'years')

  const months = endDate.diff(startDate, 'months')

  return {
    years,
    months,
  }
}
