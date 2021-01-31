import { HttpResponse } from '../protocols/https'

export const badRquest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})
