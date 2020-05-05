const router = require('express').Router()
const {Beer} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const beers = await Beer.findAll()
    res.json(beers)
  } catch (err) {
    next(err)
  }
})
