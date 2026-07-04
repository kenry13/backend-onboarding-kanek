import { profileRepository } from '../repositories/profile.repository'

export const profileService = {
  getProfile: () => {
    return profileRepository.findProfile()
  }
}