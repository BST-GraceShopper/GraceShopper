import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_CART = 'GET_CART'
const ADD_CART = 'ADD_CART'
const REMOVE_CART = 'REMOVE_CART'

/**
 * INITIAL STATE
 */
const defaultCart = {items: [], totalPrice: 0, totalQuantity: 0}

/**
 * ACTION CREATORS
 */
const _getCart = cart => ({type: GET_CART, cart})
const _removeFromCart = product => ({type: REMOVE_CART, product})
const _addToCart = product => ({type: ADD_CART, product})

/**
 * THUNK CREATORS
 */
export const getCart = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/cart/${userId}`)
    if (res.data) {
      const cart = {
        items: res.data,
        totalPrice: res.data.reduce((acc, item) => {
          return acc + item.price
        }, 0),
        totalQuantity: res.data.reduce((acc, item) => {
          return acc + item.quantity
        }, 0)
      }
      dispatch(_getCart(cart))
    } else {
      dispatch(_getCart(cart || defaultCart))
    }
  } catch (err) {
    console.error(err)
  }
}
export const removeFromCart = (user, product) => async dispatch => {
  try {
    const res = await axios.delete(`/cart/${user.id}/${product.id}`)
    dispatch(_removeFromCart(product))
  } catch (err) {
    console.error(err)
  }
}
export const addToCart = (user, product) => async dispatch => {
  try {
    const res = await axios.post(`/cart/${user.id}`, product)
    dispatch(_addToCart(res.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultCart, action) {
  switch (action.type) {
    case GET_CART:
      console.log(action.cart)
      return action.cart
    case ADD_CART:
      return [...state, action.product]
    case REMOVE_CART:
      return state.filter(item => item.id === product.id)
    default:
      return state
  }
}
