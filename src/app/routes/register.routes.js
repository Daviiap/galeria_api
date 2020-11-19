const router = require('express').Router()

const validations = require('../middlewares/validators/account.validator')
const validator = require('../middlewares/validators')
const controller = require('../controllers/account.controller')

router.post('/', [validations, validator], controller.register)

module.exports = router
