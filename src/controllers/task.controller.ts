import type { Context } from 'hono'
import { createTaskSchema } from '../types/task.schema'
import { taskService } from '../services/task.service'

export const taskController = {
  createTask: async (c: Context) => {
    const body = await c.req.json()
    const result = createTaskSchema.safeParse(body)

    if (!result.success) {
      return c.json({
        message: 'Validation failed',
        errors: result.error.flatten().fieldErrors
      }, 422)
    }

    const task = taskService.createTask(result.data)
    return c.json(task, 201)
  },

  getAllTasks: (c: Context) => {
    const tasks = taskService.getAllTasks()
    return c.json(tasks)
  }
}