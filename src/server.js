require('dotenv').config()
const logService = require('./app/services/log.service')
const environment = require('./config/environment')
const app = require('./app')

const { host, port } = environment.API

app.listen(port, host, () => {
  logService.log(`API rodando em http://${host}:${port}/`)
})
