import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const SAVE_SHIPPING = 'SAVE_SHIPPING'
const SAVE_PAYMENTINTENT = 'SAVE_PAYMENTINTENT'

/**
 * INITIAL STATE
 */
// const defaultShipping = {
//   firstName: '',
//   lastName: '',
//   address1: '',
//   address2: '',
//   city: '',
//   state: '',
//   zip: '',
//   email: '',
//   phone: ''
// }
const defaultPaymentIntent = {
  id: '',
  amount: '',
  shipping: {
    name: '',
    address: {
      line1: '',
      line2: '',
      city: '',
      state: '',
      postal_code: ''
    }
  }
}

/**
 * ACTION CREATORS
 */
const _saveShipping = shipping => ({type: SAVE_SHIPPING, shipping})
const _savePaymentIntent = paymentIntent => ({
  type: SAVE_PAYMENTINTENT,
  paymentIntent
})

/**
 * THUNK CREATORS
 */

export const saveShipping = paymentIntent => async dispatch => {
  try {
    console.log(paymentIntent)
    const response = await axios.post(
      '/api/stripe/paymentIntent',
      paymentIntent
    )
    dispatch(_savePaymentIntent(response.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultPaymentIntent, action) {
  switch (action.type) {
    // case SAVE_SHIPPING:
    //   return action.shipping
    case SAVE_PAYMENTINTENT:
      return action.paymentIntent
    default:
      return state
  }
}
