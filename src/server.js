require('dotenv').config()

const environment = require('./config/environment')
const app = require('./app')

//Services
const logService = require('./app/services/log.service')

const { host, port } = environment.API

app.listen(port, () => {
    logService.log(`DuuO API rodando em http://${host}:${port}/`);
})
