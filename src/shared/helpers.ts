import moment, { Moment } from 'moment'

export const tuple = <T extends string[]>(...args: T) => args
export const calcCareerYearAndMonth = (
  dates: Moment | Moment[]
): { years: number; months: number } => {
  if (Array.isArray(dates) && dates.length !== 2) {
    console.warn('dates length must be 2 [startDate, endDate]')
    return { years: 0, months: 0 }
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
export const phoneFormat = (str: string) =>
  `${str.slice(0, 3)} ${str.slice(3, 7)} ${str.slice(7, str.length)}`
export const fUppercase = (str: string) => `${str[0].toUpperCase()}${str.slice(1, str.length)}`
