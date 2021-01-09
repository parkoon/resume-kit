import fs from 'fs'
import moment from 'moment'
import jsonfile from 'jsonfile'

import { Profile } from '@Shared/types/Profile'
import { Meta } from '@Shared/types/Meta'
import randomId from '@Admin/helpers/randomId'

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
  skillConfigPath,
} from './paths'

const defaultSkills = [
  'Node.js',
  'Enact.js',
  'Electron.js',
  'React Native',
  'Firebase',
  'Kotlin',
  'Flutter',
  'Storybook',
  'MobX',
  'Django',
  'C/C++',
  'Redis',
  'MySQL',
  'PostgreSQL',
  'MongoDB',
  'JUnit',
  'IntelliJ',
  'Next.js',
  'React.js',
  'Javascript',
  'HTML/CSS',
  'Gradle',
  'Linux',
  'Vim',
  'Security',
  'VS Code',
  'Docker',
  'MaterialUI',
  'Bitbucket',
  'Jenkins',
  'Git / Github',
  'Agile',
  'Socket.io',
  'GitLab',
  'Redux',
  'Antd',
  'TypeORM',
  'RESTful API',
  'GraphQL',
  'Vue.js',
  'Angular.js',
  'WebRTC',
  'Styled-component',
  'Sass',
  'Webpack',
  'Gulp',
  'jQuery',
  'TypeScript',
  'Express.js',
  'AWS',
  'Nginx',
  'Thymeleaf',
  'JSP',
  'Apache',
  'PHP',
  'Java',
  'EJS',
  'Mustache',
  'PM2',
  'Pug',
  'Oracle',
  'JPA',
  'Spring',
  'Spring Boot',
  'Python',
  'Jira',
  'Slack',
  'Notion',
  'Confluence',
  'STS',
  'Ant',
  'Eclipse',
  'Maven',
  'Hadoop',
  'Elasticsearch',
  'Logstash',
  'JWT',
  'R',
  'Flask',
  'RabbitMQ',
  'Tomcat',
  'Mybatis',
  'kafka',
  'Kubernetes',
  'WebOS',
  'SVN',
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
    jsonfile.writeFileSync(skillPath, { updatedAt, data: [] }, option)
  }
  if (!fs.existsSync(skillConfigPath)) {
    jsonfile.writeFileSync(
      skillConfigPath,
      {
        updatedAt,
        data: {
          sheets: defaultSkills.map((skill) => ({ id: randomId(), title: skill })),
        },
      },
      option
    )
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
            article: true,
          },
          sort: {
            profile: 0,
            project: 1,
            career: 2,
            skill: 3,
            education: 4,
            etc: 5,
            article: 6,
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
