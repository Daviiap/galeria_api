require('dotenv').config()

const environment = {
  development: {
    API: {
      host: process.env.API_URL || 'localhost',
      port: process.env.API_PORT || 3001
    },
    JWT: {
      secret: process.env.JWT_SECRET,
      expiration_days: process.env.JWT_EXPIRATION_DAYS
    }
  },

  staging: {
    API: {
      host: process.env.API_URL,
      port: process.env.API_PORT
    },
    JWT: {
      secret: process.env.JWT_SECRET,
      expiration_days: process.env.JWT_EXPIRATION_DAYS
    }
  },

  production: {
    API: {
      host: process.env.API_URL,
      port: process.env.API_PORT
    },
    JWT: {
      secret: process.env.JWT_SECRET,
      expiration_days: process.env.JWT_EXPIRATION_DAYS
    }
  }
}

module.exports = environment[process.env.NODE_ENV || 'development']
