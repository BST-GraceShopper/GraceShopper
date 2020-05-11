const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const beers = await Product.findAll({where: {category: 'beer'}})
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

router.put('/:id', async (req, res, next) => {
  try {
    const product = await Product.update(
      {
        price: req.body.price,
        inventory: req.body.inventory
      },
      {
        where: {id: req.body.productId},
        returning: true,
        plain: true
      }
    )
    console.log(product[1], 'product in put')
    res.json(product[1])
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const beer = await Product.findByPk(req.params.id)
    await beer.destroy()
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})
