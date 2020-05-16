const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

const isAdmin = (req, res, next) => {
  if (!req.user || (req.user && !req.user.isAdmin)) {
    const err = new Error(`Admin level only Peet and Mark!`)
    err.status = 401
    return next(err)
  }
  next()
}

router.get('/', async (req, res, next) => {
  try {
    const spirits = await Product.findAll({where: {category: 'Spirit'}})
    res.json(spirits)
  } catch (err) {
    next(err)
  }
})

router.post('/:id', isAdmin, async (req, res, next) => {
  try {
    const spirit = await Product.create(req.body)
    res.json(spirit)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', isAdmin, async (req, res, next) => {
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

router.delete('/:id', isAdmin, async (req, res, next) => {
  try {
    const spirit = await Product.findByPk(req.params.id)
    await spirit.destroy()
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})
