// Services
const logService = require('../services/log.service')
const accountService = require('../services/account.service')
const httpService = require('../services/http.service')

const register = async (req, res) => {
  try {
    Object.keys(req.body).map((key) => {
      if (typeof req.body[key] == 'string') {
        req.body[key] = req.body[key].trim()
      }
    })

    logService.info('Iniciando cadastro do usuário no sistema', { ...req.body, password: '**********' })

    const result = await accountService.create(req.body)

    if (result && result.error === 'user already exist') {
      logService.warn('Já existe um usuário com e-mail informado', {
        email: req.body.email
      })
      return httpService.badRequest(res, { message: 'Já existe um usuário com este e-mail', error: result.error })
    }

    logService.info('Usuário cadastrado no sistema', { result })

    return httpService.ok(res, result)
  } catch (e) {
    logService.error('Erro ao registrar', req.originalUrl, e)
    httpService.internalServerError(res)
  }
}

const modify = async (req, res) => {
  try {
    Object.keys(req.body).map((key) => {
      if (typeof req.body[key] == 'string') {
        req.body[key] = req.body[key].trim()
      }
    })

    const { name, gender, newPassword, password, instagram } = req.body

    logService.info('Iniciando atualização de dados do usuário', { name, gender, newPassword, password, instagram })

    const result = await accountService.update(req.user.id, {
      name,
      gender,
      newPassword,
      password,
      instagram
    })

    if (result && result.error) {
      logService.warn('Atualização de dados do usuário falhou')

      if (result.error === 'user does not exist')
        return httpService.badRequest(res, { message: 'Erro ao atualizar dados do usuário', error: result.error })
    } else if (result.error === 'invalid password') {
      return httpService.unauthorized(res, { message: 'Erro ao atualizar dados do usuário', error: result.error })
    }

    logService.info('Dados do usuário atualizados com sucesso', result)

    return httpService.ok(res, result)
  } catch (error) {
    logService.error('Erro ao modificar os dados', req.originalUrl, error)
    httpService.internalServerError(res)
  }
}

module.exports = {
  register,
  modify
}
