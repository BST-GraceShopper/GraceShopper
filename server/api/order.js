const router = require('express').Router()
const {Order, addToCart, removeFromCart} = require('../db/models')
module.exports = router

router.get('/:status/:userId', async (req, res, next) => {
  try {
    const {userId, status} = req.params
    const cart = await Order.findAll({where: {userId, status}})
    res.json(cart)
  } catch (err) {
    next(err)
  }
})

router.post('/:status/:userId', async (req, res, next) => {
  try {
    const {productId} = req.body
    const {userId} = req.params
    const wines = await addToCart(productId, userId)
    res.json(wines)
  } catch (err) {
    next(err)
  }
})

router.delete('/:status/:userId', async (req, res, next) => {
  try {
    const {productId} = req.body
    const {userId} = req.params
    const wines = await removeFromCart(productId, userId)
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})
