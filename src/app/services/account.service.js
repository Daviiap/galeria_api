const { User } = require('../models')

async function create(data) {
  const user = await User.findOne({ where: { email: data.email } })

  if (user) {
    return { error: 'user already exist' }
  }

  const { id, name, email, age, gender, instagram } = await User.create(data)

  return { id, name, email, age, gender, instagram }
}

async function get(id) {
  const user = await User.findByPk(id)

  if (!user) {
    return null
  }

  return user
}

async function update(id, data) {
  const user = await User.findByPk(id)

  if (!user) {
    return { error: 'user does not exist' }
  }

  if (!(await user.checkPassword(data.password))) {
    return { error: 'invalid password' }
  }

  data.password = data.newPassword
  delete data.newPassword

  Object.keys(data).forEach((key) => {
    if (data[key]) {
      user[key] = data[key]
    }
  })

  await user.save()

  const { name, email, age, gender, instagram } = user

  return { id, name, email, age, gender, instagram }
}

module.exports = {
  create,
  get,
  update
}
