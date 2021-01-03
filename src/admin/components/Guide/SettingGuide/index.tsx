import React from 'react'
import { Tag } from 'antd'

import Space from '@Resume/components/atoms/Space'

import GuideSection from '../GuideSection'

function SettingGuide() {
  return (
    <div>
      <Space>
        <GuideSection title="홈페이지">
          <Tag color="volcano">package.json</Tag>의 <Tag color="volcano">homepage</Tag>필드의 값을
          설정합니다.
          <Tag color="volcano">github-page</Tag>로 배포를 한다면 필수로 입력해야합니다.
          <Tag color="volcano">github-page</Tag>로 배포를 하게된다면,
          <Tag color="volcano">https://[githubname].github.io/[repo]</Tag>를 입력하면 됩니다.
          <br />
          ex) https://parkoon.github.io/resume
        </GuideSection>

        <GuideSection title="타이틀">
          홈페이지의 타이틀을 설정합니다. 해당 필드의 값이 없다면 탭에 <br />
          <Tag color="volcano">https://...</Tag>이 노출됩니다.
        </GuideSection>

        <GuideSection title="설명">홈페이지의 설명을 설정합니다. SEO에 도움이 됩니다.</GuideSection>

        <GuideSection title="키워드">
          홈페이지의 키워드을 설정합니다. SEO에 도움이 됩니다.
        </GuideSection>
        <GuideSection title="메인색상">
          홈페이지의 메인 색상 설정합니다. 홈페이지의 상/하단 띠 및 타이틀, 서브타이틀과 같은 색상을
          설정합니다.
        </GuideSection>
        <GuideSection title="오픈 그래프 이미지">
          홈페이지의 공유 이미지를 설정합니다. 다른 사람에게 카카오나 SNS 로 URL 을 공유할 때 보여질
          이미지를 설정합니다. 특별한 이미지를 가지고 있지않다면 타이틀과 서브타이틀을 조합해 기본
          이미지를 생성해서 제공하고 있습니다. 이미지를 가지고 있다면
          <Tag color="volcano">/public/og.png</Tag>파일을 변경해주시면 됩니다.
        </GuideSection>

        <GuideSection title="깃허브 페이지로 배포하기">
          깃허브 페이지로 이력서를 배포합니다. 별도로 코드를 수정하지 않았다면 배포 실패는 일어나지
          않을 것으로 예상합니다. 배포가 성공했음에도 제대로 배포가 되지 않았다면
          <Tag color="volcano">홈페이지</Tag>필드의 값을 다시 확인해주세요.
        </GuideSection>
        <GuideSection title="섹션 활성화">이력서에서 보여줄 영역을 설정합니다.</GuideSection>
        <GuideSection title="섹션 순서 변경">이력서 영역의 순서를 변경합니다.</GuideSection>
        <GuideSection title="파일 히스토리">Coming soon...</GuideSection>
      </Space>
    </div>
  )
}

export default SettingGuide
