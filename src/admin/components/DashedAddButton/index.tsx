import React from 'react'
import * as S from './styles'

type DashedAddButtonProps = { onClick?(): void; style?: React.CSSProperties }
function DashedAddButton(props: DashedAddButtonProps) {
  return <S.Wrapper {...props} />
}

export default DashedAddButton
