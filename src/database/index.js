const { sequelize } = require('../app/models')
const config = require('../config/database')
const LogService = require('../app/services/log.service')

sequelize
  .authenticate()
  .then(function () {
    LogService.info(`Postgres conectado no ambiente *${config.env}*`)
  })
  .catch(function (err) {
    LogService.error(
      `Postgres com problema de conexão em *${config.env}*. \n Erro: ${err}`
    )
  })
