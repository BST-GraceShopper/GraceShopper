import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const SAVE_SHIPPING = 'SAVE_SHIPPING'

/**
 * INITIAL STATE
 */
const defaultShipping = {
  firstName: null,
  lastName: null,
  address1: null,
  address2: null,
  city: null,
  state: null,
  zip: null,
  email: null,
  phone: null
}

/**
 * ACTION CREATORS
 */
const _saveShipping = shipping => ({type: SAVE_SHIPPING, shipping})

/**
 * THUNK CREATORS
 */

export const saveShipping = shipping => async dispatch => {
  try {
    //add axios save request
    dispatch(_saveShipping(shipping))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultShipping, action) {
  switch (action.type) {
    case SAVE_SHIPPING:
      return action.shipping
    default:
      return state
  }
}
