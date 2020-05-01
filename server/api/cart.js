const router = require('express').Router()
const {Cart, addToCart, removeFromCart} = require('../db/models')
module.exports = router

router.get('/:userId', async (req, res, next) => {
  try {
    const userId = req.params.userId
    const cart = await Cart.findAll({where: {userId}})
    res.json(cart)
  } catch (err) {
    next(err)
  }
})

router.post('/:userId', async (req, res, next) => {
  try {
    const {productId} = req.body
    const {userId} = req.params
    const wines = await addToCart(productId, userId)
    res.json(wines)
  } catch (err) {
    next(err)
  }
})

router.delete('/', async (req, res, next) => {
  try {
    const wines = await Wine.findAll()
    res.json(wines)
  } catch (err) {
    next(err)
  }
})
