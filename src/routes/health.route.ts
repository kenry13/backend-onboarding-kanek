import { Hono } from 'hono'
import { healthController } from '../controllers/health.controller'

const healthRoute = new Hono()

healthRoute.get('/', healthController.checkHealth)

export default healthRoute