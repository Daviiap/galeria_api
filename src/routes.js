const router = require('express').Router()

// Routes
const register = require('./app/routes/register.routes')

router.get('/', (req, res) => {
  return res.send('API v 1.0')
})

// Public routes
router.use('/register', register)

module.exports = router
