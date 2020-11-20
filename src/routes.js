const router = require('express').Router()

// Middlewares
const authMiddleware = require('./app/middlewares/auth.middleware')

// Routes
const register = require('./app/routes/register.routes')
const auth = require('./app/routes/auth.routes')
const account = require('./app/routes/account.routes')

router.get('/', (req, res) => {
  return res.send('API v 1.0')
})

// Public routes
router.use('/register', register)
router.use('/auth', auth)

// Private routes
router.use('/account', [authMiddleware], account)

module.exports = router
