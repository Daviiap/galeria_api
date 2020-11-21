require('dotenv').config()

const environment = {
  development: {
    API: {
      url: process.env.API_URL || 'http://localhost:3002'
    },
    JWT: {
      secret: process.env.JWT_SECRET,
      expiration_days: process.env.JWT_EXPIRATION_DAYS
    }
  },

  staging: {
    API: {
      url: process.env.API_URL,
    },
    JWT: {
      secret: process.env.JWT_SECRET,
      expiration_days: process.env.JWT_EXPIRATION_DAYS
    }
  },

  production: {
    API: {
      url: process.env.API_URL,
    },
    JWT: {
      secret: process.env.JWT_SECRET,
      expiration_days: process.env.JWT_EXPIRATION_DAYS
    }
  }
}

module.exports = environment[process.env.NODE_ENV || 'development']
