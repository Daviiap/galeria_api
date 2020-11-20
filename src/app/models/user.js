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
      gender: Sequelize.STRING,
      password: Sequelize.VIRTUAL,
      passwordHash: Sequelize.STRING,
      instagram: Sequelize.STRING
    },
    {}
  )

  User.addHook('beforeSave', async (user) => {
    if (user.password) {
      user.passwordHash = await bcrypt.hash(user.password, 5)
    }
  })

  User.prototype.checkPassword = function (password) {
    return bcrypt.compare(password, this.passwordHash)
  }

  User.prototype.generateAuthToken = function () {
    const { secret, expiration_days } = config.JWT
    return jwt.sign({ id: this.id }, secret, {
      expiresIn: `${expiration_days}d`
    })
  }
  return User
}
