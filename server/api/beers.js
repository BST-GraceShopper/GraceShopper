const router = require('express').Router()
const {Beer, Product} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    // const beers = await Wine.findAll()
    const beers = await Beer.findAll()
    res.json(beers)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    // const beers = await Wine.findAll()
    // const beers = await Product.findAll({where:{category:'wine'}})
    // res.json(beers)
  } catch (err) {
    next(err)
  }
})

router.put('/', async (req, res, next) => {
  try {
    // const beers = await Wine.findAll()
    // const beers = await Product.findAll({where:{category:'wine'}})
    // res.json(beers)
  } catch (err) {
    next(err)
  }
})

router.delete('/', async (req, res, next) => {
  try {
    // const beers = await Wine.findAll()
    // const beers = await Product.findAll({where:{category:'wine'}})
    // res.json(beers)
  } catch (err) {
    next(err)
  }
})
