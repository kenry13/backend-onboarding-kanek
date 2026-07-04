import type { Profile } from '../types'

// Data in-memory dulu, nanti diganti Prisma/DB
const profileData: Profile = {
  name: 'Kanek',
  role: 'Backend Intern',
}

export const profileRepository = {
  findProfile: (): Profile => {
    return profileData
  }
}