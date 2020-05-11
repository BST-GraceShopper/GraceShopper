const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

const isAdmin = (req, res, next) => {
  if (!req.user || !req.user.level) {
    const err = new Error(`Admin level only!`)
    err.status = 401
    return next(err)
  }
  next()
}

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
    // const beers = await Beer.findAll()
    // const beers = await Product.findAll({where:{category:'beer'}})
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
    res.json(product[1])
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    console.log(req.params.id, 'req params')
    const beer = await Product.findByPk(req.params.id)
    console.log(beer, 'in route')
    await beer.destroy()
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})
