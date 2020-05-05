const router = require('express').Router()
module.exports = router

router.use('/', require('./order'))
router.use('/users', require('./users'))
router.use('/wines', require('./wines'))

router.use('/spirits', require('./spirits'))
router.use('/beers', require('./beers'))

router.use('/', require('./order'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
