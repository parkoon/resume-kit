import axios, { AxiosResponse } from 'axios'
import Profile from '@Shared/types/Profile'
import Skill from '@Shared/types/Skill'
import { Project } from '@Shared/types/Project'

export const API = axios.create({
  baseURL: 'http://localhost:1208/api',
})

export type ProfileGETResponse = AxiosResponse<{
  updatedAt: string
  profile: Profile
}>
export const ProfileAPI = {
  get() {
    return '/profile'
  },
  update(profile: Profile) {
    return API.post('/profile', profile)
  },
}

export type SkillGETResponse = AxiosResponse<{
  updatedAt: string
  skills: Skill[]
}>
export const SkillAPI = {
  get() {
    return '/skills'
  },
  update(skill: Skill[]) {
    return API.post('/skills', skill)
  },
}

export type ProjectGETResponse = AxiosResponse<Project[]>

export const ProjectAPI = {
  base: '/projects',
  get() {
    return this.base
  },
  // update(projects: Projects[]) {
  //   return API.post('/projects', skill)
  // },
  add(project: Project) {
    return API.post(this.base, project)
  },
  delete(id: string) {
    return API.delete(`${this.base}/${id}`)
  },
  updateById(id: string, project: Project) {
    return API.put(`${this.base}/${id}`, project)
  },
}

// const Article = {}
// const Education = {}
// const Etc = {}
// const Project = {}
// const Project = {}
// const Skill = {}
