const express = require('express')
const router = express.Router()

const validations = require('../middlewares/validators/auth.validator')
const validator = require('../middlewares/validators')
const controller = require('../controllers/auth.controller')

router.post('/', [validations, validator], controller.login)

module.exports = router
