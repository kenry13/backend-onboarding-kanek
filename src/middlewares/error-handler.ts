import type { Context } from 'hono'
import { ZodError } from 'zod'
import { AppError } from '../utils/app-error'
import { errorResponse } from '../utils/response'

export const errorHandler = (err: Error, c: Context) => {
  console.error(`[ERROR] ${err.message}`)

  if (err instanceof ZodError) {
    return c.json(
      errorResponse('Validation failed', err.flatten().fieldErrors),
      422
    )
  }

  // Handle custom AppError
  if (err instanceof AppError) {
    return c.json(
      errorResponse(err.message),
      err.statusCode as any
    )
  }

  return c.json(
    errorResponse('Internal server error'),
    500
  )
}