import type { Context } from 'hono'
import { profileService } from '../services/profile.service'

export const profileController = {
  getProfile: (c: Context) => {
    const profile = profileService.getProfile()
    return c.json(profile)
  }
}