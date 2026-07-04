import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import healthRoute from './routes/health.route'
import profileRoute from './routes/profile.route'
import echoRoute from './routes/echo.route'
import taskRoute from './routes/task.route'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello from Coffee Corner Backend!')
})

app.route('/health', healthRoute)
app.route('/profile', profileRoute)
app.route('/echo', echoRoute)
app.route('/tasks', taskRoute)

const port = 3000
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})