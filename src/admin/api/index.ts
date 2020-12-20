import axios, { AxiosResponse } from 'axios'
import { Profile } from '@Shared/types/Profile'

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

// const Article = {}
// const Education = {}
// const Etc = {}
// const Project = {}
// const Project = {}
// const Skill = {}
