import { Hono } from 'hono'
import { taskController } from '../controllers/task.controller'

const taskRoute = new Hono()

taskRoute.post('/', taskController.createTask)
taskRoute.get('/', taskController.getAllTasks)

export default taskRoute