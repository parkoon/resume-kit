import fs from 'fs'
import moment from 'moment'
import jsonfile from 'jsonfile'

import { Profile } from '@Shared/types/Profile'
import { Meta } from '@Shared/types/Meta'

import packageJSON from 'package.json'

import {
  dbPath,
  profilePath,
  projectPath,
  articlePath,
  careerPath,
  educationPath,
  etcPath,
  skillPath,
  metaPath,
  systemPath,
} from './paths'

const skills = [
  { id: 1, title: 'Node.js', type: 'none', level: 1 },
  { id: 2, title: 'TypeScript', type: 'none', level: 1 },
  { id: 3, title: 'Express.js', type: 'none', level: 1 },
  { id: 4, title: 'AWS', type: 'none', level: 1 },
  { id: 5, title: 'nginx', type: 'none', level: 1 },
  { id: 6, title: 'Apache', type: 'none', level: 1 },
  { id: 7, title: 'PHP', type: 'none', level: 1 },
  { id: 8, title: 'Java', type: 'none', level: 1 },
  { id: 9, title: 'Spring', type: 'none', level: 1 },
  { id: 10, title: 'Python', type: 'none', level: 1 },
  { id: 11, title: 'C/C++', type: 'none', level: 1 },
  { id: 12, title: 'Database', type: 'none', level: 1 },
  { id: 13, title: 'Redis', type: 'none', level: 1 },
  { id: 14, title: 'MySQL', type: 'none', level: 1 },
  { id: 15, title: 'MongoDB', type: 'none', level: 1 },
  { id: 16, title: 'Oracle', type: 'none', level: 1 },
  { id: 17, title: 'Front-end', type: 'none', level: 1 },
  { id: 18, title: 'Next.js', type: 'none', level: 1 },
  { id: 19, title: 'React.js', type: 'none', level: 1 },
  { id: 20, title: 'javascript', type: 'none', level: 1 },
  { id: 21, title: 'HTML/CSS', type: 'none', level: 1 },
  { id: 23, title: 'Ubuntu', type: 'none', level: 1 },
  { id: 24, title: 'Vim', type: 'none', level: 1 },
  { id: 25, title: 'Security', type: 'none', level: 1 },
  { id: 26, title: 'VS Code', type: 'none', level: 1 },
  { id: 27, title: 'Jira', type: 'none', level: 1 },
  { id: 28, title: 'Confluence', type: 'none', level: 1 },
  { id: 29, title: 'Bitbucket', type: 'none', level: 1 },
  { id: 30, title: 'DevOps', type: 'none', level: 1 },
  { id: 31, title: 'Git / Github', type: 'none', level: 1 },
  { id: 32, title: 'Agile', type: 'none', level: 1 },
  { id: 33, title: 'Socket.io', type: 'none', level: 1 },
  { id: 34, title: 'Jenkins', type: 'none', level: 1 },
]

;(async () => {
  if (!fs.existsSync(dbPath)) {
    fs.mkdirSync(dbPath)
  }

  const updatedAt = moment()
  const option = { spaces: 2 }

  if (!fs.existsSync(profilePath)) {
    jsonfile.writeFileSync(
      profilePath,
      {
        updatedAt,
        data: {
          name: '이름 *',
          position: '직책 *',
          email: '이메일 *',
          phone: '핸드폰번호 *',
          about: '간단한 자기소개*',
          github: '',
          linkedin: '',
          facebook: '',
          twitter: '',
          homepage: '',
          blog: '',
          youtube: '',
          instagram: '',
        } as Profile,
      },
      option
    )
  }
  if (!fs.existsSync(projectPath)) {
    jsonfile.writeFileSync(projectPath, { updatedAt, data: [] }, option)
  }
  if (!fs.existsSync(articlePath)) {
    jsonfile.writeFileSync(articlePath, { updatedAt, data: [] }, option)
  }
  if (!fs.existsSync(careerPath)) {
    jsonfile.writeFileSync(careerPath, { updatedAt, data: [] }, option)
  }
  if (!fs.existsSync(educationPath)) {
    jsonfile.writeFileSync(educationPath, { updatedAt, data: [] }, option)
  }
  if (!fs.existsSync(etcPath)) {
    jsonfile.writeFileSync(etcPath, { updatedAt, data: [] }, option)
  }
  if (!fs.existsSync(skillPath)) {
    jsonfile.writeFileSync(skillPath, { updatedAt, data: skills }, option)
  }

  if (!fs.existsSync(systemPath)) {
    jsonfile.writeFileSync(
      systemPath,
      {
        updatedAt,
        data: {
          enabled: {
            profile: true,
            project: true,
            career: false,
            skill: true,
            education: true,
            etc: true,
          },
          sort: {
            profile: 1,
            project: 2,
            career: 3,
            skill: 4,
            education: 5,
            etc: 6,
          },
        },
      },
      option
    )
  }

  if (!fs.existsSync(metaPath)) {
    jsonfile.writeFileSync(
      metaPath,
      {
        updatedAt,
        data: {
          title: '',
          description: '',
          image: '',
          keywords: [],
          primaryColor: '',
          homepage: packageJSON.homepage,
        } as Meta,
      },
      option
    )
  }
})()
