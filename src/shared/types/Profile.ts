export type ProfileSection =
  | 'name'
  | 'position'
  | 'email'
  | 'phone'
  | 'github'
  | 'linkedin'
  | 'facebook'
  | 'twitter'
  | 'about'
  | 'homepage'
  | 'blog'
  | 'youtube'
  | 'instagram'

export type Profile = {
  [key in ProfileSection]: string
}

export type ProfileJSON = {
  data: Profile
  updatedAt: string
}
