import React from 'react'
import styled from 'styled-components'
import Text from '../Typography/Text'
import { palette } from '@Shared/styles'

const Link = styled.a`
  /* position: relative; */
  /* padding-left: 17px; */
  cursor: pointer;
  text-decoration: none;
  /* 
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 8px;
    height: 8px;
    background: ${palette.grey[900]};
    transform: translateY(-20%) rotate(45deg);
  } */
`

type AnchorProps = {
  title: string
  href?: string
}
function Anchor({ title, href }: AnchorProps) {
  return (
    <Link href={href}>
      <Text color={palette.blue[600]}>{title}</Text>
    </Link>
  )
}

export default Anchor
