import type { CreateTaskInput } from '../types/task.schema'

interface Task extends CreateTaskInput {
  id: number
  createdAt: string
}

let tasks: Task[] = []
let nextId = 1

export const taskRepository = {
  create: (data: CreateTaskInput): Task => {
    const newTask: Task = {
      id: nextId++,
      ...data,
      createdAt: new Date().toISOString()
    }
    tasks.push(newTask)
    return newTask
  },
  findAll: (): Task[] => tasks
}