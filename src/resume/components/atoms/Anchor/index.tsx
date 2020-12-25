import React from 'react'
import styled from 'styled-components'
import Text from '../Typography/Text'
import { palette } from '@Shared/styles'

const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
`

type AnchorProps = {
  title: string
  href?: string
}
function Anchor({ title, href }: AnchorProps) {
  return (
    <Link href={href}>
      <Text fontWeight={300} color={palette.blue[600]}>
        {title}
      </Text>
    </Link>
  )
}

export default Anchor
