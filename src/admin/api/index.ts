import axios, { AxiosResponse } from 'axios'
import { Project } from '@Shared/types/Project'
import { Career } from '@Shared/types/Career'
import { Article } from '@Shared/types/Article'
import { Education } from '@Shared/types/Education'
import { Etc } from '@Shared/types/Etc'
import { Profile } from '@Shared/types/Profile'
import { Skill, SkillSheet, SkillConfig } from '@Shared/types/Skill'
import { Meta, OGImage } from '@Shared/types/Meta'
import { System, SystemEnabled, SystemSort } from '@Shared/types/System'
import { Payload } from '@Resume/types/Payload'

export const API = axios.create({
  baseURL: 'http://localhost:1208/api',
})

export type ProfileGETResponse = AxiosResponse<Profile>
export const ProfileAPI = {
  base: '/profile',
  get() {
    return this.base
  },
  update(profile: Profile) {
    return API.post(this.base, profile)
  },
}

export type MetaGETResponse = AxiosResponse<Meta>
export const MetaAPI = {
  base: '/meta',
  get() {
    return this.base
  },
  update(meta: Meta) {
    return API.put(this.base, meta)
  },
  /**
   * 세팅되어 있는 메타 데이터가 유효한지 체크
   * 이력서 페이지를 정상적으로 구동하기 위해서는 메타 설정이 필요
   * 어드민 페이지 접속 시 체크
   */
  validate() {
    return API.get<{ valid: boolean }>(`${this.base}/validation`)
  },
  createOGImage(imageInfo: OGImage) {
    return API.post<{ filename: string }>('/meta/og/image', imageInfo)
  },
  updateHomage(homepage: string) {
    return API.put('/meta/homepage', { homepage })
  },
}

export type SystemGETResponse = AxiosResponse<System>
export const SystemAPI = {
  base: '/system',
  get() {
    return this.base
  },
  updateEnable(value: SystemEnabled) {
    return API.put(`${this.base}/enable`, value)
  },
  updateSort(value: SystemSort) {
    return API.put(`${this.base}/sort`, value)
  },
  deploy() {
    return API.post<{ homepage: string }>(`${this.base}/deploy`)
  },
}
export type PayloadETResponse = AxiosResponse<Payload>
export const PayloadAPI = {
  base: '/payload',
  get() {
    return this.base
  },
}

export type SkillGETResponse = AxiosResponse<Skill[]>
export type SkillConfigGETResponse = AxiosResponse<SkillConfig>
export const SkillAPI = {
  base: '/skills',
  get() {
    return this.base
  },
  update(id: string, skill: Partial<Skill>) {
    return API.put(`${this.base}/${id}`, skill)
  },
  add(skill: Skill) {
    return API.post(this.base, skill)
  },
  delete(id: string) {
    return API.delete(`${this.base}/${id}`)
  },
  getConfig() {
    return `${this.base}/config`
  },
  getSheets() {
    return `${this.base}/config/sheet`
  },
  addSheet(sheet: SkillSheet) {
    return API.post(`${this.base}/config/sheet`, { sheet })
  },
  removeSheet(id: string) {
    return API.delete(`${this.base}/config/sheet/${id}`)
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
