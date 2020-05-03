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
    const cart = await addToCart(productId, userId)
    res.json(cart)
  } catch (err) {
    next(err)
  }
})

router.put('/:status/:userId', async (req, res, next) => {
  try {
    const {userId} = req.params
    const {productId} = req.body
    const cart = await editCart('remove', productId, userId)
    res.json(cart)
  } catch (err) {
    next(err)
  }
})

router.delete('/:status/:userId/:productId', async (req, res, next) => {
  try {
    const {userId, productId} = req.params
    const cart = await removeFromCart(productId, userId)
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})
