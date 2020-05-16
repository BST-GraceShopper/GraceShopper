import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_WINES = 'GET_WINES'
const ADD_WINE = 'ADD_WINE'
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
const _addWine = wine => ({type: ADD_WINE, wine})
const _editWine = wine => ({type: EDIT_WINE, wine})
const _removeWine = wine => ({type: REMOVE_WINE, wine})

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

export const addWine = wine => async dispatch => {
  try {
    const newWine = (await axios.post(`/api/wines/${wine.productId}`, wine))
      .data
    dispatch(_addWine(newWine))
  } catch (err) {
    console.error(err)
  }
}
export const editWine = wine => async dispatch => {
  try {
    const updatedWine = (await axios.put(`/api/wines/${wine.productId}`, wine))
      .data
    dispatch(_editWine(updatedWine))
  } catch (err) {
    console.error(err)
  }
}

export const removeWine = wineId => async dispatch => {
  try {
    await axios.delete(`/api/wines/${wineId}`)
    dispatch(_removeWine(wineId))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultWines, action) {
  switch (action.type) {
    case GET_WINES:
      return action.wines
    case ADD_WINE:
      console.log(action.wine, 'valmik')
      return [...state, action.wine]
    case EDIT_WINE:
      return state.map(wine => {
        if (wine.id === action.wine.id) {
          return action.wine
        } else return wine
      })
    case REMOVE_WINE:
      return state.filter(wineItem => wineItem.id !== action.wine)
    default:
      return state
  }
}
