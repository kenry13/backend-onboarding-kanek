import { taskRepository } from '../repositories/task.repository'
import type { CreateTaskInput } from '../types/task.schema'

export const taskService = {
  createTask: (data: CreateTaskInput) => {
    return taskRepository.create(data)
  },
  getAllTasks: () => {
    return taskRepository.findAll()
  }
}