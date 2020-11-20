const { User } = require('../models')

async function login(email, password) {
  try {
    const user = await User.findOne({ where: { email } })
    if (!user) {
      return null
    }

    const validPassword = await user.checkPassword(password)
    if (!validPassword) {
      return null
    }

    const { id, name } = user

    return {
      user: { id, name, email },
      token: user.generateAuthToken()
    }
  } catch (error) {
    throw error
  }
}

module.exports = { login }
