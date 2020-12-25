import { ArticleJSON } from '@Shared/types/Article'
import { CareerJSON } from '@Shared/types/Career'
import { EducationJSON } from '@Shared/types/Education'
import { EtcJSON } from '@Shared/types/Etc'
import { ProfileJSON } from '@Shared/types/Profile'
import { ProjectJSON } from '@Shared/types/Project'
import { SkillJSON } from '@Shared/types/Skill'

export type Payload = {
  article: ArticleJSON
  career: CareerJSON
  education: EducationJSON
  etc: EtcJSON
  profile: ProfileJSON
  project: ProjectJSON
  skill: SkillJSON
}
