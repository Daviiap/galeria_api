const { User } = require('../models')

async function create(data) {
  try {
    const user = await User.findOne({ where: { email: data.email } })

    if (user) {
      return null
    }

    const { id, name, email, age, gender } = await User.create(data)

    return { id, name, email, age, gender }
  } catch (error) {
    throw error
  }
}

module.exports = {
  create
}
