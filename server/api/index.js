const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/wines', require('./wines'))
router.use('/spirits', require('./spirits'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
