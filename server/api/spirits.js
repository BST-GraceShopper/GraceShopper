const router = require('express').Router()
const {Spirit} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const spirits = await Spirit.findAll()
    res.json(spirits)
  } catch (err) {
    next(err)
  }
})
