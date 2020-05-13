const router = require('express').Router()
const {Spirit, Product} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const spirits = await Product.findAll({where: {category: 'Spirit'}})
    res.json(spirits)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    // const spirits = await Product.findAll({where: {category: 'spirit'}})
  } catch (err) {
    next(err)
  }
})

router.put('/', async (req, res, next) => {
  try {
    // const spirits = await Product.findAll({where: {category: 'spirit'}})
  } catch (err) {
    next(err)
  }
})

router.delete('/', async (req, res, next) => {
  try {
    // const spirits = await Product.findAll({where: {category: 'spirit'}})
  } catch (err) {
    next(err)
  }
})
