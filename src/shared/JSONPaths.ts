import path from 'path'

const DB = path.join(path.resolve(__dirname).split('/server')[0], 'db')
const JSONPaths = {
  profile: path.join(DB, 'profile.json'),
  skills: path.join(DB, 'skills.json'),
  projects: path.join(DB, 'projects.json'),
  careers: path.join(DB, 'careers.json'),
  educations: path.join(DB, 'educations.json'),
  articles: path.join(DB, 'articles.json'),
  etcs: path.join(DB, 'etcs.json'),
}

export default JSONPaths