const router = require('express').Router()
const {Wine, Product} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    // const wines = await Wine.findAll()
    const wines = await Product.findAll({where: {category: 'wine'}})
    res.json(wines)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    // const wines = await Wine.findAll()
    // const wines = await Product.findAll({where:{category:'wine'}})
    // res.json(wines)
  } catch (err) {
    next(err)
  }
})

router.put('/', async (req, res, next) => {
  try {
    // const wines = await Wine.findAll()
    // const wines = await Product.findAll({where:{category:'wine'}})
    // res.json(wines)
  } catch (err) {
    next(err)
  }
})

router.delete('/', async (req, res, next) => {
  try {
    // const wines = await Wine.findAll()
    // const wines = await Product.findAll({where:{category:'wine'}})
    // res.json(wines)
  } catch (err) {
    next(err)
  }
})
