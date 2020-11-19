'use strict'
const config = require('../../config/environment')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    'User',
    {
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      age: Sequelize.INTEGER,
      gender: Sequelize.STRING
    },
    {}
  )

  return User
}
