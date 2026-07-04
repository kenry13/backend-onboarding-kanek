export const echoService = {
  processEcho: (data: unknown, contentType: string | undefined) => {
    return {
      message: 'Echo success',
      receivedData: data,
      headers: { contentType }
    }
  }
}