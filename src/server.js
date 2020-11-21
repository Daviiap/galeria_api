require('dotenv').config()

const environment = require('./config/environment')
const app = require('./app')

//Services
const logService = require('./app/services/log.service')

const { url } = environment.API

app.listen(url, () => {
  logService.log(`API rodando em ${url}/`)
})
