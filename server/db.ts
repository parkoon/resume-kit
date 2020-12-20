import fs from 'fs'
import moment from 'moment'
import jsonfile from 'jsonfile'

import {
  dbPath,
  profilePath,
  projectPath,
  articlePath,
  careerPath,
  educationPath,
  etcPath,
  skillPath,
} from './paths'
;(async () => {
  if (!fs.existsSync(dbPath)) {
    console.log('없다')
    fs.mkdirSync(dbPath)
  }

  const updatedAt = moment()

  if (!fs.existsSync(profilePath)) {
    jsonfile.writeFileSync(profilePath, { updatedAt, profile: {} })
  }
  if (!fs.existsSync(projectPath)) {
    jsonfile.writeFileSync(projectPath, { updatedAt, projects: [] })
  }
  if (!fs.existsSync(articlePath)) {
    jsonfile.writeFileSync(articlePath, { updatedAt, articles: [] })
  }
  if (!fs.existsSync(careerPath)) {
    jsonfile.writeFileSync(careerPath, { updatedAt, careers: [] })
  }
  if (!fs.existsSync(educationPath)) {
    jsonfile.writeFileSync(educationPath, { updatedAt, educations: [] })
  }
  if (!fs.existsSync(etcPath)) {
    jsonfile.writeFileSync(etcPath, { updatedAt, etcs: [] })
  }
  if (!fs.existsSync(skillPath)) {
    jsonfile.writeFileSync(skillPath, { updatedAt, skills: [] })
  }
})()
