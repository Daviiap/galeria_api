const log = require('../services/log.service')
const service = require('../services/auth.service')
const http = require('../services/http.service')

const login = async (req, res) => {
  try {
    const { email, password } = req.body

    log.info('Iniciando login', { email })

    const result = await service.login(email, password)

    if (result.error) {
      log.warn('E-mail ou senha inválido(a)', { email, password })

      if (result.error === 'user does not exist') {
        return http.notFound(res, { message: 'E-mail inválido, não existe usuário com este e-mail cadastrado', error: result.error })
      } else if (result.error === 'invalid password') {
        return http.badRequest(res, { message: 'Senha inválida', error: result.error })
      }
    }

    log.info('Login finalizado', { email })

    const { user, token } = result

    return http.ok(res, { user, token })
  } catch (e) {
    log.error('Erro ao realizar login', req.originalUrl, e)
    http.internalServerError(res)
  }
}

module.exports = { login }
