const router = require('express').Router()
const {
  Order,
  Product,
  User,
  addToOrder,
  removeFromOrder
} = require('../db/models')
module.exports = router

router.get('/order/:userId', async (req, res, next) => {
  try {
    const {userId} = req.params
    const status = 'order'
    // const {productId} = req.body
    const order = await Order.findOne({where: {userId, status}})
    console.log(order.id)
    res.json(order[1])
  } catch (err) {
    next(err)
  }
})

router.get('/:userId', async (req, res, next) => {
  try {
    const {userId} = req.params
    const status = 'order'
    const order = await Order.findAll({where: {userId, status}})
    res.json(order)
  } catch (err) {
    next(err)
  }
})

router.get('/order/:userId', async (req, res, next) => {
  try {
    const {userId} = req.params
    const status = 'order'
    const order = await Order.findAll({where: {userId, status}})
    res.json(order)
  } catch (err) {
    next(err)
  }
})

router.post('/:userId', async (req, res, next) => {
  try {
    const {productId} = req.body
    const {userId} = req.params
    const status = 'order'
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
    const status = 'order'
    const {productId} = req.body
    const order = await Order.findOne({where: {userId, productId, status}})
    const order1 = await Order.update(
      {quantity: order.quantity - 1},
      {returning: true, where: {userId, productId, status}}
    )
    res.json(order1[1][0])
  } catch (err) {
    next(err)
  }
})

router.delete('/:userId/:productId', async (req, res, next) => {
  try {
    const {userId, productId} = req.params
    const status = 'order'
    const order = await Order.destroy({where: {userId, productId, status}})
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})
