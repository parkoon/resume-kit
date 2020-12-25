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
import CareerSection from '@Resume/components/templates/CareerSection'
import { PayloadProvider } from '@Resume/context/PayloadContext'

function Resume({ payload }: { payload: Payload }) {
  return (
    <Theme primaryColor="#030852" secondaryColor="#061178">
      <PayloadProvider payload={payload}>
        <ResumeLayout>
          <ProfileSection />
          <IntroduceSection />
          <ProjectSection />
          <CareerSection />
          <SkillSection />
          <EducationSection />
          <EtcSection />
          <ArticleSection />
        </ResumeLayout>
      </PayloadProvider>
    </Theme>
  )
}

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
  }
  return {
    props: { payload },
  }
}

export default Resume
