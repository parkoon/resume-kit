import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Media } from '@Shared/styles'

const Theme: React.FC = ({ children }) => (
  <ThemeProvider
    theme={{
      ...(Media as any),
    }}
  >
    {children}
  </ThemeProvider>
)
export default Theme
