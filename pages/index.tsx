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
import CareerSection from '@Resume/components/templates/CareerSection'

function Resume({ payload }: { payload: Payload }) {
  const { profile, project, skill, education, career, etc, article } = payload.system.data.sort
  return (
    <PayloadProvider payload={payload}>
      <Theme>
        <ResumeLayout>
          {[
            <ProfileSection key="profile" sort={profile} />,
            <IntroduceSection key="introduce" sort={profile} />,
            <ProjectSection key="project" sort={project} />,
            <SkillSection key="skill" sort={skill} />,
            <EducationSection key="education" sort={education} />,
            <CareerSection key="career" sort={career} />,
            <EtcSection key="etc" sort={etc} />,
            <ArticleSection key="article" sort={article} />,
          ].sort((p, k) => p.props.sort - k.props.sort)}
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
    system: readJSON(JSONPaths.system),
  }
  return {
    props: { payload },
  }
}

export default Resume
