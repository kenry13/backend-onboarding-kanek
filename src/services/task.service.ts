import { taskRepository } from '../repositories/task.repository'
import { AppError } from '../utils/app-error'
import type { CreateTaskInput } from '../types/task.schema'

export const taskService = {
  createTask: (data: CreateTaskInput) => {
    return taskRepository.create(data)
  },
  getAllTasks: () => {
    return taskRepository.findAll()
  },
  getTaskById: (id: number) => {
    const task = taskRepository.findById(id)
    if (!task) {
      throw new AppError('Task not found', 404)
    }
    return task
  }
}