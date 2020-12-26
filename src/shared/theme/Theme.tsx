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

  const mainColor = mainColors.find((color) => color.dark === data.primaryColor)

  return (
    <ThemeProvider
      theme={{
        ...(Media as any),
        primaryColor: mainColor ? mainColor.dark : mainColors[0].dark,
        secondaryColor: mainColor ? mainColor.bright : mainColors[0].bright,
      }}
    >
      {children}
    </ThemeProvider>
  )
}

export default Theme
