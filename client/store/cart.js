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
const _removeFromCart = product => ({type: REMOVE_CART, productId})
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
export const removeFromCart = (userId, productId) => async dispatch => {
  try {
    console.log('store', userId, productId)
    const res = await axios.delete(`/api/cart/${userId}/${productId}`)
    dispatch(_removeFromCart(productId))
  } catch (err) {
    console.error(err)
  }
}
export const addToCart = (userId, productId) => async dispatch => {
  try {
    const res = await axios.post(`/api/cart/${userId}`, {productId})
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
      return {
        totalPrice: state.totalPrice + action.product.price,
        totalQuantity: state.totalQuantity + action.product.quantity,
        items: [...state.items, action.product]
      }
    case REMOVE_CART:
      return {
        totalPrice: state.totalPrice - action.product.price,
        totalQuantity: state.totalQuantity - action.product.quantity,
        items: state.items.filter(item => item.id !== action.productId)
      }
    default:
      return state
  }
}
