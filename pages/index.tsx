import jsonfile from 'jsonfile'
import path from 'path'
import React from 'react'

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

function Resume({ payload }: { payload: Payload }) {
  return (
    <ResumeLayout>
      <ProfileSection />
      <IntroduceSection />
      <EducationSection />
      <CareerSection />
      <ProjectSection />
      <SkillSection />
      <ArticleSection />
      <EtcSection />
    </ResumeLayout>
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
