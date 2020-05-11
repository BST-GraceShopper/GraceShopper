import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_WINES = 'GET_WINES'
const ADD_WINE = 'DD_WINE'
const EDIT_WINE = 'EDIT_WINE'
const REMOVE_WINE = 'REMOVE_WINE'

/**
 * INITIAL STATE
 */
const defaultWines = []

/**
 * ACTION CREATORS
 */
const _getWines = wines => ({type: GET_WINES, wines})
const _addWine = wines => ({type: ADD_WINE, wine})
const _editWine = wines => ({type: EDIT_WINE, wine})
const _removeWine = wines => ({type: REMOVE_WINE, wine})

/**
 * THUNK CREATORS
 */
export const getWines = () => async dispatch => {
  try {
    const wines = (await axios.get('/api/wines')).data
    dispatch(_getWines(wines))
  } catch (err) {
    console.error(err)
  }
}

export const addWine = () => async dispatch => {
  // try {
  //   const wines = (await axios.get('/api/wines')).data
  //   console.log(wines)
  //   dispatch(_getWines(wines))
  // } catch (err) {
  //   console.error(err)
  // }
}
export const editWine = () => async dispatch => {
  // try {
  //   const wines = (await axios.get('/api/wines')).data
  //   console.log(wines)
  //   dispatch(_getWines(wines))
  // } catch (err) {
  //   console.error(err)
  // }
}
export const removeWine = () => async dispatch => {
  // try {
  //   const wines = (await axios.get('/api/wines')).data
  //   console.log(wines)
  //   dispatch(_getWines(wines))
  // } catch (err) {
  //   console.error(err)
  // }
}

/**
 * REDUCER
 */
export default function(state = defaultWines, action) {
  switch (action.type) {
    case GET_WINES:
      return action.wines
    case ADD_WINE:
      return [...state, action.wine]
    case EDIT_WINE:
      return state
    case REMOVE_WINE:
      return state.filter(wineItem => wineItem.id !== action.wine.id)
    default:
      return state
  }
}
