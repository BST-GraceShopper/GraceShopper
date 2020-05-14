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
      address1: null,
      address2: null,
      city: null,
      state: null,
      zip: null
    },
    name: null,
    email: null,
    phone: null
  },
  card: null,
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
