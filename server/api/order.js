const router = require('express').Router()
const {Order, Product, addToCart, removeFromCart} = require('../db/models')
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
    const order = await Order.findOne({where: {userId, productId}})
    if (order) {
      const ret = await Order.update(
        {quantity: order.quantity + 1},
        {returning: true, where: {userId, productId}}
      )
      res.json(ret[1][0])
    } else {
      const {id, name, maker, price, image} = await Product.findByPk(productId)
      const ret = await Order.create({
        userId,
        productId: id,
        name,
        maker,
        image,
        price,
        status: 'cart',
        quantity: 1
      })
      res.json(ret)
    }
  } catch (err) {
    next(err)
  }
})

router.put('/:status/:userId', async (req, res, next) => {
  try {
    const {userId} = req.params
    const {productId} = req.body
    const order = await Order.findOne({where: {userId, productId}})
    const cart = await Order.update(
      {quantity: order.quantity - 1},
      {returning: true, where: {userId, productId}}
    )
    res.json(cart[1][0])
  } catch (err) {
    next(err)
  }
})

router.delete('/:status/:userId/:productId', async (req, res, next) => {
  try {
    const {userId, productId} = req.params
    const cart = await Order.destroy({where: {userId, productId}})
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})
