const router = require('express').Router()
const {
  Order,
  Product,
  User,
  addToCart,
  removeFromCart
} = require('../db/models')
const stripe_key =
  process.env.stripe_key || require('../../secrets.js').stripe_key
module.exports = router
const stripe = require('stripe')(stripe_key)

router.post('/paymentIntent', async (req, res, next) => {
  console.log('here')
  try {
    const {amount, receipt_email, shipping} = req.body
    const response = await stripe.paymentIntents.create({
      amount,
      receipt_email,
      currency: 'usd',
      shipping
    })
    res.send(response)
  } catch (er) {
    console.log(er)
  }
})

router.post('/confirm', async (req, res, next) => {
  const {paymentIntent, paymentMethod} = req.body
  try {
    const response = await stripe.paymentIntents.confirm(paymentIntent, {
      payment_method: paymentMethod
    })
    res.send(response)
  } catch (er) {
    console.log(er)
  }
})
