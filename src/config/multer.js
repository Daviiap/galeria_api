const multer = require('multer')
const path = require('path')
const crypto = require('crypto')

module.exports = {
  dest: path.resolve(__dirname, '..', '..', 'temp', 'uploads'),
  storage: multer.diskStorage({
    destination: (req, file, next) => {
      next(null, path.resolve(__dirname, '..', '..', 'temp', 'uploads'))
    },
    filename: (req, file, next) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) {
          next(err)
        }

        const filename = `${hash.toString('hex')}-${file.originalname}`

        next(null, filename)
      })
    }
  }),
  limits: {
    fileSize: 2 * 1024 * 1024
  },
  fileFilter: (req, file, next) => {
    const allowedMimes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png',
      'image/gif',
    ]

    if (allowedMimes.includes(file.mimetype)) {
      next(null, true)
    } else {
      next(new Error('invalid file type'))
    }
  }
}
