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

/** 핸드폰 형식으로 변경 ex) 01012345678 -> 010 3328 0917 */
export const phoneFormat = (str: string) =>
  `${str.slice(0, 3)} ${str.slice(3, 7)} ${str.slice(7, str.length)}`

/** 첫 글자 대문자로 */
export const fUppercase = (str: string) => `${str[0].toUpperCase()}${str.slice(1, str.length)}`

/** 시작일 기준으로 정렬 */
export const sortByStartedAt = <T extends any[]>(values: T, order: 1 | -1 = 1) =>
  values.sort(
    (p, k) =>
      order *
      ((moment(p.startedAt).format('YYYYMMDD') as any) -
        (moment(k.startedAt).format('YYYYMMDD') as any))
  )

export const periodify = (start: string, end?: string) => {
  if (start === end) {
    return start
  }

  if (!end) {
    return `${start} - 현재`
  }

  return `${start} - ${end}`
}
