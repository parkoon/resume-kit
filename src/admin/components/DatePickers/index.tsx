import React from 'react'
import { Moment } from 'moment'
import { DatePicker } from 'antd'

const { RangePicker } = DatePicker
export type Date = Moment | Moment[] | null
export type DateString = string | string[]
type DatePickersProps = {
  onChange(date: Date, dateString: DateString): void
  multiple?: boolean
  startDateLabel: string
  doneDateLabel: string
}
function DatePickers({ multiple, startDateLabel, doneDateLabel, onChange }: DatePickersProps) {
  const handleChange = (date: Moment | any[] | null, dateString: string | string[]) => {
    onChange(date as Date, dateString)
  }
  return (
    <>
      {multiple ? (
        <RangePicker
          placeholder={[startDateLabel, doneDateLabel]}
          format={'YYYY. MM'}
          picker="month"
          onChange={handleChange}
        />
      ) : (
        <DatePicker
          placeholder={startDateLabel}
          format={'YYYY. MM'}
          picker="month"
          onChange={handleChange}
        />
      )}
    </>
  )
}

export default DatePickers
