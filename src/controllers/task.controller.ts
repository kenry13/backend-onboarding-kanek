import type { Context } from 'hono'
import { createTaskSchema } from '../types/task.schema'
import { taskService } from '../services/task.service'
import { successResponse, errorResponse } from '../utils/response'

export const taskController = {
  createTask: async (c: Context) => {
    const body = await c.req.json()
    const result = createTaskSchema.safeParse(body)

    if (!result.success) {
      return c.json(
        errorResponse('Validation failed', result.error.flatten().fieldErrors),
        422
      )
    }

    const task = taskService.createTask(result.data)
    return c.json(successResponse(task, 'Task created'), 201)
  },

  getAllTasks: (c: Context) => {
    const tasks = taskService.getAllTasks()
    return c.json(successResponse(tasks))
  },

  getTaskById: (c: Context) => {
    const id = Number(c.req.param('id'))
    const task = taskService.getTaskById(id)
    return c.json(successResponse(task))
  }
}