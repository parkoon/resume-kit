export type Career = {
  corp: string // 회사명
  position: string // 직책
  period: { years: number; months: number } // 업무기간
  resigned: boolean // 퇴사 여부
  startedAt: string // 입사일
  resignedAt?: string // 퇴사일
}
