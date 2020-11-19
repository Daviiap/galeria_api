require('dotenv').config()

const environment = {
  development: {
    API: {
      host: process.env.API_URL || 'localhost',
      port: process.env.API_PORT || 3001
    }
  },

  staging: {
    API: {
      host: process.env.API_URL,
      port: process.env.API_PORT
    }
  },

  production: {
    API: {
      host: process.env.API_URL,
      port: process.env.API_PORT
    }
  }
}

module.exports = environment[process.env.NODE_ENV || 'development']
