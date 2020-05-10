const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.json(products)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    // const products = await Product.findAll()
  } catch (err) {
    next(err)
  }
})

router.put('/', async (req, res, next) => {
  try {
    // const products = await Product.findAll()
  } catch (err) {
    next(err)
  }
})

router.delete('/', async (req, res, next) => {
  try {
    // const products = await Product.findAll()
  } catch (err) {
    next(err)
  }
})
