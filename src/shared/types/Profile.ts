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

type Profile = {
  [key in ProfileSection]: string
}

export default Profile
