const router = require('express').Router()

router.get('/', (req, res) => {
  return res.send('API v 1.0')
})

// Public routes

// Private routes

module.exports = router
