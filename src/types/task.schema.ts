import { z } from 'zod'

export const createTaskSchema = z.object({
  title: z.string().min(3, 'Title minimal 3 karakter').max(100, 'Title maksimal 100 karakter'),
  description: z.string().max(500, 'Description maksimal 500 karakter').optional(),
  status: z.enum(['pending', 'in_progress', 'done']).default('pending'),
  priority: z.enum(['low', 'medium', 'high']).default('medium')
})

export type CreateTaskInput = z.infer<typeof createTaskSchema>