import React from 'react'
import useSWR from 'swr'

import { API, PayloadAPI, PayloadETResponse } from '@Admin/api'
import ArticleSection from '@Resume/components/templates/ArticleSection'
import CareerSection from '@Resume/components/templates/CareerSection'
import EducationSection from '@Resume/components/templates/EducationSection'
import EtcSection from '@Resume/components/templates/EtcSection'
import IntroduceSection from '@Resume/components/templates/IntroduceSection'
import ProfileSection from '@Resume/components/templates/ProfileSection'
import ProjectSection from '@Resume/components/templates/ProjectSection'
import SkillSection from '@Resume/components/templates/SkillSection'
import { PayloadProvider } from '@Resume/context/PayloadContext'
import ResumeLayout from '@Resume/layout'
import Theme from '@Shared/theme/Theme'

function Preview() {
  const { data } = useSWR<PayloadETResponse>(PayloadAPI.get(), API, {
    loadingTimeout: 9000,
  })

  if (!data) {
    return null
  }

  const { data: payload } = data

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

Preview.displayName = 'Preview'

export default Preview
