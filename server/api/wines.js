const router = require('express').Router()
const {Wine} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  console.log('test')
  try {
    const wines = await Wine.findAll()
    console.log(wines)
    res.json(wines)
  } catch (err) {
    next(err)
  }
})
