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
  { id: 2, title: 'Enact.js', type: 'none', level: 1 },
  { id: 3, title: 'Electron.js', type: 'none', level: 1 },
  { id: 4, title: 'React Native', type: 'none', level: 1 },
  { id: 5, title: 'Firebase', type: 'none', level: 1 },
  { id: 6, title: 'Kotlin', type: 'none', level: 1 },
  { id: 7, title: 'Flutter', type: 'none', level: 1 },
  { id: 8, title: 'Storybook', type: 'none', level: 1 },
  { id: 9, title: 'MobX', type: 'none', level: 1 },
  { id: 10, title: 'Django', type: 'none', level: 1 },
  { id: 11, title: 'C/C++', type: 'none', level: 1 },
  { id: 12, title: 'Redis', type: 'none', level: 1 },
  { id: 13, title: 'MySQL', type: 'none', level: 1 },
  { id: 14, title: 'PostgreSQL', type: 'none', level: 1 },
  { id: 15, title: 'MongoDB', type: 'none', level: 1 },
  { id: 16, title: 'JUnit', type: 'none', level: 1 },
  { id: 17, title: 'IntelliJ', type: 'none', level: 1 },
  { id: 18, title: 'Next.js', type: 'none', level: 1 },
  { id: 19, title: 'React.js', type: 'none', level: 1 },
  { id: 20, title: 'Javascript', type: 'none', level: 1 },
  { id: 21, title: 'HTML/CSS', type: 'none', level: 1 },
  { id: 22, title: 'Gradle', type: 'none', level: 1 },
  { id: 23, title: 'Linux', type: 'none', level: 1 },
  { id: 24, title: 'Vim', type: 'none', level: 1 },
  { id: 25, title: 'Security', type: 'none', level: 1 },
  { id: 26, title: 'VS Code', type: 'none', level: 1 },
  { id: 27, title: 'Docker', type: 'none', level: 1 },
  { id: 28, title: 'MaterialUI', type: 'none', level: 1 },
  { id: 29, title: 'Bitbucket', type: 'none', level: 1 },
  { id: 30, title: 'Jenkins', type: 'none', level: 1 },
  { id: 31, title: 'Git / Github', type: 'none', level: 1 },
  { id: 32, title: 'Agile', type: 'none', level: 1 },
  { id: 33, title: 'Socket.io', type: 'none', level: 1 },
  { id: 34, title: 'GitLab', type: 'none', level: 1 },
  { id: 35, title: 'Redux', type: 'none', level: 1 },
  { id: 36, title: 'Antd', type: 'none', level: 1 },
  { id: 37, title: 'TypeORM', type: 'none', level: 1 },
  { id: 38, title: 'RESTful API', type: 'none', level: 1 },
  { id: 39, title: 'GraphQL', type: 'none', level: 1 },
  { id: 40, title: 'Vue.js', type: 'none', level: 1 },
  { id: 41, title: 'Angular.js', type: 'none', level: 1 },
  { id: 42, title: 'WebRTC', type: 'none', level: 1 },
  { id: 43, title: 'Styled-component', type: 'none', level: 1 },
  { id: 44, title: 'Sass', type: 'none', level: 1 },
  { id: 45, title: 'Webpack', type: 'none', level: 1 },
  { id: 46, title: 'Gulp', type: 'none', level: 1 },
  { id: 47, title: 'jQuery', type: 'none', level: 1 },
  { id: 48, title: 'TypeScript', type: 'none', level: 1 },
  { id: 49, title: 'Express.js', type: 'none', level: 1 },
  { id: 50, title: 'AWS', type: 'none', level: 1 },
  { id: 51, title: 'Nginx', type: 'none', level: 1 },
  { id: 52, title: 'Thymeleaf', type: 'none', level: 1 },
  { id: 53, title: 'JSP', type: 'none', level: 1 },
  { id: 54, title: 'Apache', type: 'none', level: 1 },
  { id: 55, title: 'PHP', type: 'none', level: 1 },
  { id: 56, title: 'Java', type: 'none', level: 1 },
  { id: 57, title: 'EJS', type: 'none', level: 1 },
  { id: 58, title: 'Mustache', type: 'none', level: 1 },
  { id: 59, title: 'PM2', type: 'none', level: 1 },
  { id: 60, title: 'Pug', type: 'none', level: 1 },
  { id: 61, title: 'Oracle', type: 'none', level: 1 },
  { id: 62, title: 'JPA', type: 'none', level: 1 },
  { id: 63, title: 'Spring', type: 'none', level: 1 },
  { id: 64, title: 'Spring Boot', type: 'none', level: 1 },
  { id: 65, title: 'Python', type: 'none', level: 1 },
  { id: 66, title: 'Jira', type: 'none', level: 1 },
  { id: 67, title: 'Slack', type: 'none', level: 1 },
  { id: 68, title: 'Notion', type: 'none', level: 1 },
  { id: 69, title: 'Confluence', type: 'none', level: 1 },
  { id: 70, title: 'STS', type: 'none', level: 1 },
  { id: 71, title: 'Ant', type: 'none', level: 1 },
  { id: 72, title: 'Eclipse', type: 'none', level: 1 },
  { id: 73, title: 'Maven', type: 'none', level: 1 },
  { id: 74, title: 'Hadoop', type: 'none', level: 1 },
  { id: 75, title: 'Elasticsearch', type: 'none', level: 1 },
  { id: 76, title: 'Logstash', type: 'none', level: 1 },
  { id: 77, title: 'JWT', type: 'none', level: 1 },
  { id: 78, title: 'R', type: 'none', level: 1 },
  { id: 79, title: 'Flask', type: 'none', level: 1 },
  { id: 80, title: 'RabbitMQ', type: 'none', level: 1 },
  { id: 81, title: 'Tomcat', type: 'none', level: 1 },
  { id: 82, title: 'Mybatis', type: 'none', level: 1 },
  { id: 83, title: 'kafka', type: 'none', level: 1 },
  { id: 84, title: 'Kubernetes', type: 'none', level: 1 },
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
