import path from 'path'

export const dbPath = path.join(path.resolve(__dirname).split('/server')[0], 'db')
export const profilePath = path.join(dbPath, 'profile.json')
export const skillPath = path.join(dbPath, 'skill.json')
export const projectPath = path.join(dbPath, 'project.json')
export const careerPath = path.join(dbPath, 'career.json')
export const educationPath = path.join(dbPath, 'education.json')
export const articlePath = path.join(dbPath, 'article.json')
export const etcPath = path.join(dbPath, 'etc.json')
