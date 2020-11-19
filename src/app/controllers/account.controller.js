// Services
const logService = require('../services/log.service')
const accountService = require('../services/account.service')
const httpService = require('../services/http.service')

const register = async (req, res) => {
  try {
    const result = await accountService.create(req.body)

    if (!result)
      return httpService.badRequest(res, 'Já existe um usuário com este e-mail')

    return httpService.ok(res, result)
  } catch (e) {
    logService.error('Erro ao registrar', req.originalUrl, e)
    httpService.internalServerError(res)
  }
}

module.exports = {
  register
}
