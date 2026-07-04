import { Hono } from 'hono'
import { profileController } from '../controllers/profile.controller'

const profileRoute = new Hono()

profileRoute.get('/', profileController.getProfile)

export default profileRoute