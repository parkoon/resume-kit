import React from 'react'
import { Moment } from 'moment'
import { DatePicker } from 'antd'

const { RangePicker } = DatePicker
export type Date = Moment | Moment[] | null
export type DateString = string | string[]
type CareerDatePickerProps = {
  onChange(date: Date, dateString: DateString): void
  resigned?: boolean
}
function CareerDatePicker({ resigned, onChange }: CareerDatePickerProps) {
  const handleChange = (date: Moment | any[] | null, dateString: string | string[]) => {
    onChange(date as Date, dateString)
  }
  return (
    <>
      {resigned ? (
        <RangePicker
          placeholder={['입사일', '퇴사일']}
          format={'YYYY. MM'}
          picker="month"
          onChange={handleChange}
        />
      ) : (
        <DatePicker
          placeholder="입사일"
          format={'YYYY. MM'}
          picker="month"
          onChange={handleChange}
        />
      )}
    </>
  )
}

export default CareerDatePicker
