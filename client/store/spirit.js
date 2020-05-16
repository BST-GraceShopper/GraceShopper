import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_SPIRITS = 'GET_SPIRITS'
const ADD_SPIRIT = 'ADD_SPIRIT'
const EDIT_SPIRIT = 'EDIT_SPIRIT'
const REMOVE_SPIRIT = 'REMOVE_SPIRIT'

/**
 * INITIAL STATE
 */
const defaultSpirits = []

/**
 * ACTION CREATORS
 */
const _getSpirits = spirits => ({type: GET_SPIRITS, spirits})
const _addSpirit = spirit => ({type: ADD_SPIRIT, spirit})
const _editSpirit = spirit => ({type: EDIT_SPIRIT, spirit})
const _removeSpirit = spirit => ({type: REMOVE_SPIRIT, spirit})

/**
 * THUNK CREATORS
 */
export const getSpirits = () => async dispatch => {
  try {
    const spirits = (await axios.get('/api/spirits')).data

    dispatch(_getSpirits(spirits))
  } catch (err) {
    console.error(err)
  }
}

export const addSpirit = spirit => async dispatch => {
  try {
    const newSpirit = (await axios.post(
      `/api/spirits/${spirit.productId}`,
      spirit
    )).data
    dispatch(_addSpirit(newSpirit))
  } catch (err) {
    console.error(err)
  }
}
export const editSpirit = spirit => async dispatch => {
  try {
    const updatedSpirit = (await axios.put(
      `/api/spirits/${spirit.productId}`,
      spirit
    )).data
    dispatch(_editSpirit(updatedSpirit))
  } catch (err) {
    console.error(err)
  }
}

export const removeSpirit = spiritId => async dispatch => {
  try {
    await axios.delete(`/api/spirits/${spiritId}`)
    dispatch(_removeSpirit(spiritId))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultSpirits, action) {
  switch (action.type) {
    case GET_SPIRITS:
      return action.spirits
    case ADD_SPIRIT:
      return [...state, action.spirit]
    case EDIT_SPIRIT:
      return state.map(spirit => {
        if (spirit.id === action.spirit.id) {
          return action.spirit
        } else return spirit
      })
    case REMOVE_SPIRIT:
      return state.filter(spiritItem => spiritItem.id !== action.spirit)
    default:
      return state
  }
}
