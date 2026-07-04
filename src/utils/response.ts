export const successResponse = (data: unknown, message = 'Success') => {
  return {
    success: true,
    message,
    data
  }
}

export const errorResponse = (message: string, errors?: unknown) => {
  return {
    success: false,
    message,
    ...(errors ? { errors } : {})
  }
}