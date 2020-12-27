import jsonfile from 'jsonfile'
import path from 'path'
import React from 'react'

import Theme from '@Shared/theme/Theme'
import { Payload } from '@Resume/types/Payload'
import JSONPaths from '@Shared/JSONPaths'
import ResumeLayout from '@Resume/layout'
import ProfileSection from '@Resume/components/templates/ProfileSection'
import IntroduceSection from '@Resume/components/templates/IntroduceSection'
import EducationSection from '@Resume/components/templates/EducationSection'
import ProjectSection from '@Resume/components/templates/ProjectSection'
import SkillSection from '@Resume/components/templates/SkillSection'
import ArticleSection from '@Resume/components/templates/ArticleSection'
import EtcSection from '@Resume/components/templates/EtcSection'
import { PayloadProvider } from '@Resume/context/PayloadContext'

// Compare function needed by the Sort component
// const compare = (a, b) => {
//   return a.props.sort - b.props.sort
// }

// const Sort = ({ children, by }) => {
//   return React.Children.toArray(children).sort(compare)
// }

function Resume({ payload }: { payload: Payload }) {
  return (
    <PayloadProvider payload={payload}>
      <Theme>
        <ResumeLayout>
          <ProfileSection />
          <IntroduceSection />
          {/* <Sort>{[<ProfileSection sort={1} />, <IntroduceSection sort={2} />]}</Sort> */}
          <ProjectSection />
          <SkillSection />
          <EducationSection />
          <EtcSection />
          <ArticleSection />
        </ResumeLayout>
      </Theme>
    </PayloadProvider>
  )
}

Resume.displayName = 'Resume'

/** JSON 파일 읽기 */
const readJSON = (target: string) => jsonfile.readFileSync(path.join(process.cwd(), target))
export async function getStaticProps() {
  const payload = {
    article: readJSON(JSONPaths.articles),
    career: readJSON(JSONPaths.careers),
    education: readJSON(JSONPaths.educations),
    etc: readJSON(JSONPaths.etcs),
    profile: readJSON(JSONPaths.profile),
    project: readJSON(JSONPaths.projects),
    skill: readJSON(JSONPaths.skills),
    meta: readJSON(JSONPaths.meta),
  }
  return {
    props: { payload },
  }
}

export default Resume
