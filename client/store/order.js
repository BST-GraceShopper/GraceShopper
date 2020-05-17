import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ORDER = 'GET_ORDER'
const ADD_ORDER = 'ADD_ORDER'
const REMOVEONE_ORDER = 'REMOVEONE_ORDER'
const REMOVEP_ORDER = 'REMOVEP_ORDER'

/**
 * INITIAL STATE
 */
const defaultorder = {items: [], totalPrice: 0, totalQuantity: 0}

/**
 * ACTION CREATORS
 */
const _getOrder = order => ({type: GET_ORDER, order})
const _addToOrder = product => ({type: ADD_ORDER, product})
const _removeOneFromOrder = product => ({type: REMOVEONE_ORDER, product})
const _removeProductFromOrder = product => ({type: REMOVEP_ORDER, product})

/**
 * THUNK CREATORS
 */

export const getOrder = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/order/${userId}`)
    if (res.data) {
      const order = {
        items: res.data,
        totalPrice: res.data.reduce((acc, item) => {
          return acc + item.price * item.quantity
        }, 0),
        totalQuantity: res.data.reduce((acc, item) => {
          return acc + item.quantity
        }, 0)
      }
      dispatch(_getOrder(order))
    } else {
      dispatch(_getOrder(order || defaultorder))
    }
  } catch (err) {
    console.error(err)
  }
}

export const addToOrder = (userId, productId) => async dispatch => {
  try {
    const res = await axios.post(`/api/order/${userId}`, {productId})
    dispatch(_addToOrder(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const removeFromOrder = (userId, product) => async dispatch => {
  try {
    if (product.quantity === 1) {
      //delete
      const res = await axios.delete(
        `/api/order/${userId}/${product.productId}`
      )
      dispatch(_removeProductFromOrder(product))
    } else {
      //remove 1
      const res = await axios.put(`/api/order/${userId}`, product)
      dispatch(_removeOneFromOrder(res.data))
    }
  } catch (err) {
    console.error(err)
  }
}
export const removeProductFromOrder = (userId, product) => async dispatch => {
  try {
    const res = await axios.delete(`/api/order/${userId}/${product.productId}`)
    dispatch(_removeProductFromOrder(product))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultorder, action) {
  switch (action.type) {
    case GET_ORDER:
      return action.order
    case ADD_ORDER:
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
    case REMOVEONE_ORDER:
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
    case REMOVEP_ORDER:
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
