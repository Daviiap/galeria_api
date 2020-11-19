require('dotenv').config()

const database = {
  development: {
    env: 'development',
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'davi',
    database: process.env.DB_NAME || 'galeria',
    dialect: 'postgres',
    options: {
      dialect: 'postgres',
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      }
    }
  },

  staging: {
    env: 'staging',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dialect: 'postgres',
    options: {
      host: process.env.DB_HOST,
      dialect: 'postgres',
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      }
    }
  },

  production: {
    env: 'production',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dialect: 'postgres',
    options: {
      host: process.env.DB_HOST,
      dialect: 'postgres',
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      }
    }
  }
}

module.exports = database[process.env.NODE_ENV || 'development']
