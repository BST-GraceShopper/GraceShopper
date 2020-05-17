const router = require('express').Router()
const {
  Order,
  Product,
  User,
  addToCart,
  removeFromCart
} = require('../db/models')
const {stripe_key} = require('../../secrets.js')
module.exports = router
const stripe = require('stripe')(stripe_key)

router.post('/paymentIntent', async (req, res, next) => {
  console.log('here')
  try {
    const {amount, shipping} = req.body
    console.log(amount, shipping)
    const response = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      shipping
    })
    res.send(response)
  } catch (er) {
    console.log(er)
  }
})
// router.post('/paymentMethod', async(req,res,next)=>{
//   try{
//     const response= await stripe.paymentIntents.create({
//       amount:100,
//       currency:'usd',
//       payment_method_types: ['card']
//   })
//   console.log(response)
// }catch(er){
//   console.log(er)
// }
// })
router.post('/confirm', async (req, res, next) => {
  const {paymentIntent, paymentMethod} = req.body
  console.log(paymentIntent, paymentMethod)
  try {
    const response = await stripe.paymentIntents.confirm(paymentIntent, {
      payment_method: paymentMethod
    })
    res.send(response)
  } catch (er) {
    console.log(er)
  }
})
