import axios from 'axios'

//ACTION TYPES
const GET_PRODUCTS = 'GET_PRODUCTS'
const ADD_PRODUCTS = 'ADD_PRODUCTS'
const EDIT_PRODUCTS = 'EDIT_PRODUCTS'
const REMOVE_PRODUCTS = 'REMOVE_PRODUCTS'

//INITIAL STATE
const defaultProducts = []

//ACTION CREATORS
const _getProducts = products => ({type: GET_PRODUCTS, products})
const _addProducts = products => ({type: ADD_PRODUCTS, products})
const _editProducts = products => ({type: EDIT_PRODUCTS, products})
const _removeProducts = products => ({type: REMOVE_PRODUCTS, products})

//THUNK CREATORS
export const getProducts = () => async dispatch => {
  try {
    const wines = (await axios.get('/api/wines')).data
    const spirits = (await axios.get('/api/spirits')).data
    const beers = (await axios.get('/api/beers')).data

    const products = Promise.all(wines, spirits, beers)
    console.log(products)
    dispatch(_getProducts(products))
  } catch (err) {
    console.error(err)
  }
  // try {
  //   const spirits = (await axios.get('/api/spirits')).data
  //   console.log(spirits)
  //   dispatch(_getProducts(spirits))
  // } catch (err) {
  //   console.error(err)
  // }
}

export const addProducts = () => async dispatch => {
  try {
    const wines = (await axios.get('/api/wines')).data
    const spirits = (await axios.get('/api/spirits')).data
    const beers = (await axios.get('/api/beers')).data

    const products = Promise.all(wines, spirits, beers)
    console.log(products)
    dispatch(_addProducts(products))
  } catch (err) {
    console.error(err)
  }

  // try {
  //   const spirits = (await axios.get('/api/spirits')).data
  //   console.log(spirits)
  //   dispatch(_addProducts(spirits))
  // } catch (err) {
  //   console.error(err)
  // }
}

export const editProducts = () => async dispatch => {
  try {
    const wines = (await axios.get('/api/wines')).data
    const spirits = (await axios.get('/api/spirits')).data
    const beers = (await axios.get('/api/beers')).data

    const products = Promise.all(wines, spirits, beers)
    console.log(products)
    dispatch(_editProducts(products))
  } catch (err) {
    console.error(err)
  }

  // try {
  //   const spirits = (await axios.get('/api/spirits')).data
  //   console.log(spirits)
  //   dispatch(_editProducts(spirits))
  // } catch (err) {
  //   console.error(err)
  // }
}

export const removeProducts = () => async dispatch => {
  try {
    const wines = (await axios.get('/api/wines')).data
    const spirits = (await axios.get('/api/spirits')).data
    const beers = (await axios.get('/api/beers')).data

    const products = Promise.all(wines, spirits, beers)
    console.log(products)
    dispatch(_removeProducts(products))
  } catch (err) {
    console.error(err)
  }

  // try {
  //   const spirits = (await axios.get('/api/spirits')).data
  //   console.log(spirits)
  //   dispatch(_removeProducts(spirits))
  // } catch (err) {
  //   console.error(err)
  // }
}

//REDUCER
export default function(state = defaultProducts, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products
    case ADD_PRODUCTS:
      return [...state, action.product]
    case EDIT_PRODUCTS:
      return state
    case REMOVE_PRODUCTS:
      return state.filter(productItem => productItem.id !== action.product.id)
    default:
      return state
  }
}
