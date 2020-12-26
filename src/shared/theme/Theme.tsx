import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Media } from '@Shared/styles'
import { usePayload } from '@Resume/context/PayloadContext'

import mainColors from './mainColors'

type ThemeProps = {
  children: React.ReactNode
}
function Theme({ children }: ThemeProps) {
  const {
    meta: { data },
  } = usePayload()

  const { dark: primaryColor, bright: secondaryColor } = mainColors.find(
    (color) => color.dark === data.primaryColor
  )!

  return (
    <ThemeProvider
      theme={{
        ...(Media as any),
        primaryColor,
        secondaryColor,
      }}
    >
      {children}
    </ThemeProvider>
  )
}

export default Theme
