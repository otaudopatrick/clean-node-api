import { HttpRequest, HttpResponse } from '../protocols/https'
import { MissingParamError } from '../erros/missing-param-error'
import { badRquest } from '../helpers/http-helpers'
import { Controller } from '../protocols/controller'

export class SignUpController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFileds = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFileds) {
      if (!httpRequest.body[field]) {
        return badRquest(new MissingParamError(field))
      }
    }
  }
}
