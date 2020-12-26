import axios, { AxiosResponse } from 'axios'
import { Project } from '@Shared/types/Project'
import { Career } from '@Shared/types/Career'
import { Article } from '@Shared/types/Article'
import { Education } from '@Shared/types/Education'
import { Etc } from '@Shared/types/Etc'
import { Profile } from '@Shared/types/Profile'
import { Skill } from '@Shared/types/Skill'

export const API = axios.create({
  baseURL: 'http://localhost:1208/api',
})

export type ProfileGETResponse = AxiosResponse<{
  updatedAt: string
  data: Profile
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
  data: Skill[]
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
  add(project: Project) {
    return API.post(this.base, project)
  },
  delete(id: string) {
    return API.delete(`${this.base}/${id}`)
  },
  update(id: string, project: Project) {
    return API.put(`${this.base}/${id}`, project)
  },
}

export type CareerGETResponse = AxiosResponse<Career[]>
export const CareerAPI = {
  base: '/careers',
  get() {
    return this.base
  },
  add(career: Career) {
    return API.post(this.base, career)
  },
  delete(id: string) {
    return API.delete(`${this.base}/${id}`)
  },
  update(id: string, career: Career) {
    return API.put(`${this.base}/${id}`, career)
  },
}

export type ArticleGETResponse = AxiosResponse<Article[]>
export const ArticleAPI = {
  base: '/articles',
  get() {
    return this.base
  },
  add(article: Article) {
    return API.post(this.base, article)
  },
  delete(id: string) {
    return API.delete(`${this.base}/${id}`)
  },
  update(id: string, article: Article) {
    return API.put(`${this.base}/${id}`, article)
  },
}

export type EducationGETResponse = AxiosResponse<Education[]>
export const EducationAPI = {
  base: '/educations',
  get() {
    return this.base
  },
  add(education: Education) {
    return API.post(this.base, education)
  },
  delete(id: string) {
    return API.delete(`${this.base}/${id}`)
  },
  update(id: string, education: Education) {
    return API.put(`${this.base}/${id}`, education)
  },
}

export type EtcGETResponse = AxiosResponse<Etc[]>
export const EtcAPI = {
  base: '/etcs',
  get() {
    return this.base
  },
  add(etc: Etc) {
    return API.post(this.base, etc)
  },
  delete(id: string) {
    return API.delete(`${this.base}/${id}`)
  },
  update(id: string, etc: Etc) {
    return API.put(`${this.base}/${id}`, etc)
  },
}
