require('dotenv').config()

const environment = require('./config/environment')
const app = require('./app')

//Services
const logService = require('./app/services/log.service')

const { url } = environment.API

app.listen(port, host, () => {
  logService.log(`API rodando em ${url}/`)
})
