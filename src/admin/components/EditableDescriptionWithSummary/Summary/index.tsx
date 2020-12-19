import React from 'react'

import { Wrapper, Body, Item, Footer } from './styles'
import { Pagination } from 'antd'

const items = [
  {
    title: '셀링 선생님 영상이 다운로드 되지 않도록 수정',
    corp: '퀄슨 (Qualson)',
  },
  {
    title: '셀링 선생님 영상이 다운로드 되지 않도록 수정',
    corp: '퀄슨 (Qualson)',
  },
  {
    title: '셀링 선생님 영상이 다운로드 되지 않도록 수정',
    corp: '퀄슨 (Qualson)',
  },
  {
    title: '셀링 선생님 영상이 다운로드 되지 않도록 수정',
    corp: '퀄슨 (Qualson)',
  },
  {
    title: '셀링 선생님 영상이 다운로드 되지 않도록 수정',
    corp: '퀄슨 (Qualson)',
  },
  {
    title: '셀링 선생님 영상이 다운로드 되지 않도록 수정',
    corp: '퀄슨 (Qualson)',
  },
  {
    title: '셀링 선생님 영상이 다운로드 되지 않도록 수정',
    corp: '퀄슨 (Qualson)',
  },
  {
    title: '셀링 선생님 영상이 다운로드 되지 않도록 수정',
    corp: '퀄슨 (Qualson)',
  },
  {
    title: '셀링 선생님 영상이 다운로드 되지 않도록 수정',
    corp: '퀄슨 (Qualson)',
  },
]

function Summary() {
  return (
    <Wrapper>
      <Body>
        {items.map(({ title, corp }, index) => (
          <Item key={index}>
            <h3>{title}</h3>
            <span>{corp}</span>
          </Item>
        ))}
      </Body>
      <Footer>
        <Pagination simple defaultCurrent={2} total={50} />
      </Footer>
    </Wrapper>
  )
}

export default Summary
