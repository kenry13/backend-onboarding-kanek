import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello from Coffee Corner Backend!')
})

app.get('/health', (c) => {
  return c.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  })
})

app.get('/profile', (c) => {
  return c.json({
    name: 'Kanek',
    role: 'Backend Intern',
  })
})

app.post('/echo', async (c) => {
  const body = await c.req.json()
  return c.json({
    message: 'Echo success',
    receivedData: body,
    headers: {
      contentType: c.req.header('content-type')
    }
  })
})

const port = 3000
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})