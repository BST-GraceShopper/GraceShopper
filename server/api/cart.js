const router = require('express').Router()
const {
  Order,
  Product,
  User,
  addToCart,
  removeFromCart
} = require('../db/models')
module.exports = router

router.get('/checkout/:userId', async (req, res, next) => {
  try {
    const {userId} = req.params
    const status = 'cart'
    // const {productId} = req.body
    const order = await Order.findOne({where: {userId, status}})
    console.log(order.id)
    const cart = await Order.update(
      {status: 'order', orderId: order.id},
      {returning: true, where: {userId, status}}
    )
    res.json(cart[1])
  } catch (err) {
    next(err)
  }
})

router.get('/:userId', async (req, res, next) => {
  try {
    const {userId} = req.params
    const status = 'cart'
    const cart = await Order.findAll({where: {userId, status}})
    res.json(cart)
  } catch (err) {
    next(err)
  }
})

router.post('/:userId', async (req, res, next) => {
  try {
    const {productId} = req.body
    const {userId} = req.params
    const status = 'cart'
    // const user = await User.findByPk(userId)
    // userId = user.id || jwt.decode(userId,"NONE").id
    const order = await Order.findOne({where: {userId, productId, status}})
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
        status,
        quantity: 1
      })
      res.json(ret)
    }
  } catch (err) {
    next(err)
  }
})

router.put('/:userId', async (req, res, next) => {
  try {
    const {userId} = req.params
    const status = 'cart'
    const {productId} = req.body
    const order = await Order.findOne({where: {userId, productId, status}})
    const cart = await Order.update(
      {quantity: order.quantity - 1},
      {returning: true, where: {userId, productId, status}}
    )
    res.json(cart[1][0])
  } catch (err) {
    next(err)
  }
})

router.delete('/:userId/:productId', async (req, res, next) => {
  try {
    const {userId, productId} = req.params
    const status = 'cart'
    const cart = await Order.destroy({where: {userId, productId, status}})
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})
