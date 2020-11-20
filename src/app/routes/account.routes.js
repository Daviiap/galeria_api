const router = require('express').Router()

const validations = require('../middlewares/validators/account.validator')
const validator = require('../middlewares/validators')
const controller = require('../controllers/account.controller')

router.put('/', [validations.update, validator], controller.modify)

module.exports = router
