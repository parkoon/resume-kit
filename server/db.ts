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
  { id: 1, title: 'Node.js', type: 'none', level: 'none' },
  { id: 2, title: 'Enact.js', type: 'none', level: 'none' },
  { id: 3, title: 'Electron.js', type: 'none', level: 'none' },
  { id: 4, title: 'React Native', type: 'none', level: 'none' },
  { id: 5, title: 'Firebase', type: 'none', level: 'none' },
  { id: 6, title: 'Kotlin', type: 'none', level: 'none' },
  { id: 7, title: 'Flutter', type: 'none', level: 'none' },
  { id: 8, title: 'Storybook', type: 'none', level: 'none' },
  { id: 9, title: 'MobX', type: 'none', level: 'none' },
  { id: 10, title: 'Django', type: 'none', level: 'none' },
  { id: 11, title: 'C/C++', type: 'none', level: 'none' },
  { id: 12, title: 'Redis', type: 'none', level: 'none' },
  { id: 13, title: 'MySQL', type: 'none', level: 'none' },
  { id: 14, title: 'PostgreSQL', type: 'none', level: 'none' },
  { id: 15, title: 'MongoDB', type: 'none', level: 'none' },
  { id: 16, title: 'JUnit', type: 'none', level: 'none' },
  { id: 17, title: 'IntelliJ', type: 'none', level: 'none' },
  { id: 18, title: 'Next.js', type: 'none', level: 'none' },
  { id: 19, title: 'React.js', type: 'none', level: 'none' },
  { id: 20, title: 'Javascript', type: 'none', level: 'none' },
  { id: 21, title: 'HTML/CSS', type: 'none', level: 'none' },
  { id: 22, title: 'Gradle', type: 'none', level: 'none' },
  { id: 23, title: 'Linux', type: 'none', level: 'none' },
  { id: 24, title: 'Vim', type: 'none', level: 'none' },
  { id: 25, title: 'Security', type: 'none', level: 'none' },
  { id: 26, title: 'VS Code', type: 'none', level: 'none' },
  { id: 27, title: 'Docker', type: 'none', level: 'none' },
  { id: 28, title: 'MaterialUI', type: 'none', level: 'none' },
  { id: 29, title: 'Bitbucket', type: 'none', level: 'none' },
  { id: 30, title: 'Jenkins', type: 'none', level: 'none' },
  { id: 31, title: 'Git / Github', type: 'none', level: 'none' },
  { id: 32, title: 'Agile', type: 'none', level: 'none' },
  { id: 33, title: 'Socket.io', type: 'none', level: 'none' },
  { id: 34, title: 'GitLab', type: 'none', level: 'none' },
  { id: 35, title: 'Redux', type: 'none', level: 'none' },
  { id: 36, title: 'Antd', type: 'none', level: 'none' },
  { id: 37, title: 'TypeORM', type: 'none', level: 'none' },
  { id: 38, title: 'RESTful API', type: 'none', level: 'none' },
  { id: 39, title: 'GraphQL', type: 'none', level: 'none' },
  { id: 40, title: 'Vue.js', type: 'none', level: 'none' },
  { id: 41, title: 'Angular.js', type: 'none', level: 'none' },
  { id: 42, title: 'WebRTC', type: 'none', level: 'none' },
  { id: 43, title: 'Styled-component', type: 'none', level: 'none' },
  { id: 44, title: 'Sass', type: 'none', level: 'none' },
  { id: 45, title: 'Webpack', type: 'none', level: 'none' },
  { id: 46, title: 'Gulp', type: 'none', level: 'none' },
  { id: 47, title: 'jQuery', type: 'none', level: 'none' },
  { id: 48, title: 'TypeScript', type: 'none', level: 'none' },
  { id: 49, title: 'Express.js', type: 'none', level: 'none' },
  { id: 50, title: 'AWS', type: 'none', level: 'none' },
  { id: 51, title: 'Nginx', type: 'none', level: 'none' },
  { id: 52, title: 'Thymeleaf', type: 'none', level: 'none' },
  { id: 53, title: 'JSP', type: 'none', level: 'none' },
  { id: 54, title: 'Apache', type: 'none', level: 'none' },
  { id: 55, title: 'PHP', type: 'none', level: 'none' },
  { id: 56, title: 'Java', type: 'none', level: 'none' },
  { id: 57, title: 'EJS', type: 'none', level: 'none' },
  { id: 58, title: 'Mustache', type: 'none', level: 'none' },
  { id: 59, title: 'PM2', type: 'none', level: 'none' },
  { id: 60, title: 'Pug', type: 'none', level: 'none' },
  { id: 61, title: 'Oracle', type: 'none', level: 'none' },
  { id: 62, title: 'JPA', type: 'none', level: 'none' },
  { id: 63, title: 'Spring', type: 'none', level: 'none' },
  { id: 64, title: 'Spring Boot', type: 'none', level: 'none' },
  { id: 65, title: 'Python', type: 'none', level: 'none' },
  { id: 66, title: 'Jira', type: 'none', level: 'none' },
  { id: 67, title: 'Slack', type: 'none', level: 'none' },
  { id: 68, title: 'Notion', type: 'none', level: 'none' },
  { id: 69, title: 'Confluence', type: 'none', level: 'none' },
  { id: 70, title: 'STS', type: 'none', level: 'none' },
  { id: 71, title: 'Ant', type: 'none', level: 'none' },
  { id: 72, title: 'Eclipse', type: 'none', level: 'none' },
  { id: 73, title: 'Maven', type: 'none', level: 'none' },
  { id: 74, title: 'Hadoop', type: 'none', level: 'none' },
  { id: 75, title: 'Elasticsearch', type: 'none', level: 'none' },
  { id: 76, title: 'Logstash', type: 'none', level: 'none' },
  { id: 77, title: 'JWT', type: 'none', level: 'none' },
  { id: 78, title: 'R', type: 'none', level: 'none' },
  { id: 79, title: 'Flask', type: 'none', level: 'none' },
  { id: 80, title: 'RabbitMQ', type: 'none', level: 'none' },
  { id: 81, title: 'Tomcat', type: 'none', level: 'none' },
  { id: 82, title: 'Mybatis', type: 'none', level: 'none' },
  { id: 83, title: 'kafka', type: 'none', level: 'none' },
  { id: 84, title: 'Kubernetes', type: 'none', level: 'none' },
  { id: 85, title: 'WebOS', type: 'none', level: 'none' },
  { id: 86, title: 'SVN', type: 'none', level: 'none' },
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
