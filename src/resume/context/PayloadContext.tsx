import React, { useContext } from 'react'
import moment from 'moment'

import { Payload } from '@Resume/types/Payload'

const PayloadContext = React.createContext({} as Payload)

type PayloadProviderProp = {
  children: React.ReactNode
  payload: Payload
}

export function PayloadProvider({ children, payload }: PayloadProviderProp) {
  return <PayloadContext.Provider value={payload}>{children}</PayloadContext.Provider>
}

export function usePayload(): Payload {
  const payload = useContext(PayloadContext)
  return payload
}

export default PayloadContext
