import type { Context } from 'hono'
import { echoService } from '../services/echo.service'

export const echoController = {
  echo: async (c: Context) => {
    const body = await c.req.json()
    const contentType = c.req.header('content-type')
    const result = echoService.processEcho(body, contentType)
    return c.json(result)
  }
}