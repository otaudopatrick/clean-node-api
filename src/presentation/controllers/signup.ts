import { HttpRequest, HttpResponse } from '../protocols/https'
import { MissingParamError } from '../erros/missing-param-error'
import { badRquest } from '../helpers/http-helpers'
export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRquest(new MissingParamError('name'))
    }
    if (!httpRequest.body.email) {
      return badRquest(new MissingParamError('email'))
    }
  }
}
