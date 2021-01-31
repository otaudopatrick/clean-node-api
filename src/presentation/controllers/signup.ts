import { HttpRequest, HttpResponse } from '../protocols/https'
import { MissingParamError } from '../erros/missing-param-error'
import { badRquest } from '../helpers/http-helpers'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFileds = ['name', 'email', 'password']
    for (const field of requiredFileds) {
      if (!httpRequest.body[field]) {
        return badRquest(new MissingParamError(field))
      }
    }
  }
}
