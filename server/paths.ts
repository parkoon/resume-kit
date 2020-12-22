import path from 'path'

export const dbPath = path.join(path.resolve(__dirname).split('/server')[0], 'db')
export const profilePath = path.join(dbPath, 'profile.json')
export const skillPath = path.join(dbPath, 'skills.json')
export const projectPath = path.join(dbPath, 'projects.json')
export const careerPath = path.join(dbPath, 'careers.json')
export const educationPath = path.join(dbPath, 'educations.json')
export const articlePath = path.join(dbPath, 'articles.json')
export const etcPath = path.join(dbPath, 'etcs.json')
