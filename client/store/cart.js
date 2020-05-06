import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_CART = 'GET_CART'
const ADD_CART = 'ADD_CART'
const REMOVEONE_CART = 'REMOVEONE_CART'
const REMOVEP_CART = 'REMOVEP_CART'

/**
 * INITIAL STATE
 */
const defaultCart = {items: [], totalPrice: 0, totalQuantity: 0}

/**
 * ACTION CREATORS
 */
const _getCart = cart => ({type: GET_CART, cart})
const _addToCart = product => ({type: ADD_CART, product})
const _removeOneFromCart = product => ({type: REMOVEONE_CART, product})
const _removeProductFromCart = product => ({type: REMOVEP_CART, product})

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
          return acc + item.price * item.quantity
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

export const addToCart = (userId, productId) => async dispatch => {
  try {
    const res = await axios.post(`/api/cart/${userId}`, {productId})
    dispatch(_addToCart(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const checkout = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/cart/checkout/${userId}`)
    dispatch(getCart(userId))
  } catch (err) {
    console.error(err)
  }
}

export const removeFromCart = (userId, product) => async dispatch => {
  try {
    if (product.quantity === 1) {
      //delete
      const res = await axios.delete(`/api/cart/${userId}/${product.productId}`)
      dispatch(_removeProductFromCart(product))
    } else {
      //remove 1
      const res = await axios.put(`/api/cart/${userId}`, product)
      dispatch(_removeOneFromCart(res.data))
    }
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
      return action.cart
    case ADD_CART:
      if (
        state.items.filter(item => item.productId === action.product.productId)
          .length
      ) {
        return {
          totalPrice: state.totalPrice + action.product.price,
          totalQuantity: state.totalQuantity + 1,
          items: state.items.map(item => {
            if (item.productId === action.product.productId) {
              return action.product
            } else {
              return item
            }
          })
        }
      } else {
        return {
          totalPrice: state.totalPrice + action.product.price,
          totalQuantity: state.totalQuantity + action.product.quantity,
          items: [...state.items, action.product]
        }
      }
    case REMOVEONE_CART:
      return {
        totalPrice: state.totalPrice - action.product.price,
        totalQuantity: state.totalQuantity - 1,
        items: state.items.map(item => {
          if (item.productId === action.product.productId) {
            return action.product
          } else {
            return item
          }
        })
      }
    case REMOVEP_CART:
      return {
        totalPrice: state.totalPrice - action.product.price,
        totalQuantity: state.totalQuantity - action.product.quantity,
        items: state.items.filter(
          item => item.productId !== action.product.productId
        )
      }
    default:
      return state
  }
}
