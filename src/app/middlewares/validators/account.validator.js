const { body } = require('express-validator')

const genderEnum = require('../../enums/gender.enum')

module.exports = [
  body('name')
    .notEmpty()
    .withMessage('name is required')
    .isString()
    .withMessage('name with invalid format')
    .isLength({ min: 5 })
    .withMessage('name must have more than 5 characters')
    .custom((name) => {
      const nameTest = name.split(' ')

      if (nameTest.isLength < 2) {
        throw new Error('you need to insert at least one last name')
      }
      return true
    }),
  body('email').isEmail().withMessage('invalid email format'),
  body('age')
    .isNumeric()
    .withMessage('age must be an number')
    .isInt()
    .withMessage('age must be an integer')
    .custom((age) => {
      if (age <= 0) {
        throw new Error('age must be greater than 0')
      } else if (age < 12) {
        throw new Error('age must be at least 12')
      }

      return true
    }),
  body('gender')
    .isString()
    .withMessage('gender must be an String')
    .custom((gender) => {
      if (
        gender === genderEnum.MALE ||
        gender === genderEnum.FEMALE ||
        gender === genderEnum.OTHER
      ) {
        return true
      }
      return false
    })
    .withMessage('invalid value for gender')
]
