const router = require('express').Router()

// Routes
const register = require('./app/routes/register.routes')
const auth = require('./app/routes/auth.routes')

router.get('/', (req, res) => {
  return res.send('API v 1.0')
})

// Public routes
router.use('/register', register)
router.use('/auth', auth)

module.exports = router
