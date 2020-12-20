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

  const initObject = { updatedAt: moment(), data: {} }

  if (!fs.existsSync(profilePath)) {
    jsonfile.writeFileSync(profilePath, initObject)
  }
  if (!fs.existsSync(projectPath)) {
    jsonfile.writeFileSync(projectPath, initObject)
  }
  if (!fs.existsSync(articlePath)) {
    jsonfile.writeFileSync(articlePath, initObject)
  }
  if (!fs.existsSync(careerPath)) {
    jsonfile.writeFileSync(careerPath, initObject)
  }
  if (!fs.existsSync(educationPath)) {
    jsonfile.writeFileSync(educationPath, initObject)
  }
  if (!fs.existsSync(etcPath)) {
    jsonfile.writeFileSync(etcPath, initObject)
  }
  if (!fs.existsSync(skillPath)) {
    jsonfile.writeFileSync(skillPath, initObject)
  }
})()
