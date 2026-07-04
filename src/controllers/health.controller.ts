import type { Context } from 'hono'
import { healthService } from '../services/health.service'

export const healthController = {
  checkHealth: (c: Context) => {
    const result = healthService.checkHealth()
    return c.json(result)
  }
}