import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */

const SAVE_PAYMENT = 'SAVE_PAYMENT'

/**
 * INITIAL STATE
 */

const defaultPayment = {
  billing_details: {
    address: {
      line1: '',
      line2: '',
      city: '',
      state: '',
      postal_code: ''
    },
    name: '',
    email: '',
    phone: ''
  },
  card: {},
  type: 'card'
}

/**
 * ACTION CREATORS
 */

const _savePayment = payment => ({type: SAVE_PAYMENT, payment})

/**
 * THUNK CREATORS
 */

export const savePayment = payment => async dispatch => {
  try {
    //add axios save request
    dispatch(_savePayment(payment))
  } catch (err) {
    console.error(err)
  }
}

export const confirmPayment = (
  paymentIntent,
  paymentMethod
) => async dispatch => {
  try {
    //add axios save request
    console.log(paymentIntent, paymentMethod)
    const response = (await axios.post('/api/stripe/confirm', {
      paymentIntent,
      paymentMethod
    })).data
    // dispatch(_savePayment(payment))
    return response.status
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultPayment, action) {
  switch (action.type) {
    case SAVE_PAYMENT:
      return action.payment
    default:
      return state
  }
}
