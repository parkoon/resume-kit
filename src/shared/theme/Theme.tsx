import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Media } from '@Shared/styles'

type ThemeProps = {
  children: React.ReactNode
  primaryColor: string
  secondaryColor: string
}
function Theme({ children, primaryColor, secondaryColor }: ThemeProps) {
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
