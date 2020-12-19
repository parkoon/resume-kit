import React from 'react'

import { Wrapper } from './styles'
import EditableTextField from '@Admin/components/EditableTextField'
import { Select } from 'antd'
import { skillTitles } from '@Shared/constants'
import ListCreator from '@Admin/components/ListCreator'

// {
//     corp: '퀄슨 (퀄슨)',
//     startedAt: moment().toString(),
//     resignedAt: moment('2021/02/22').toString(),
//     title: '프론트엔드 개발자',
//     completed: true,
//     skills: ['Node.js', 'Oracle', 'Python'],
//     tasks: ['가나다라마바사', '아자차카타파다', '칼퇴근하기', '한시간일찍오기'],
//     description:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique rem fuga harum blanditiis labore incidunt quam, reiciendis ratione, exercitationem molestiae optio unde aliquam voluptatibus eligendi? Perferendis eos facere itaque delectus.',
//   },
function EditableDescription() {
  return (
    <Wrapper>
      <EditableTextField
        name="title"
        type="text"
        initialValue="팝송패키지 구매의 경우 이지펜 관련 안내문구가 노출"
        bold
      />

      <ListCreator />

      <div>
        회사 <br />
        2012 ~ 2021.10
      </div>
      <div>
        업무 <br />
        2012 ~ 2021.10
      </div>

      <div>
        기간 <br />
        2012 ~ 2021.10
      </div>
      <div>
        종료여부 <br />
        2012 ~ 2021.10
      </div>
      <div>업무</div>
      <div>
        설명
        <EditableTextField
          name="title"
          type="textarea"
          initialValue="팝송패키지 구매의 경우 이지펜 관련 안내문구가 노출"
        />
      </div>

      <div>
        기술스펙
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="프로젝트에 사용된 기술을 선택해주세요."
          onChange={(values) => {
            console.log(values)
          }}
          options={skillTitles.map((title) => ({ value: title }))}
        />
      </div>
    </Wrapper>
  )
}

export default EditableDescription
