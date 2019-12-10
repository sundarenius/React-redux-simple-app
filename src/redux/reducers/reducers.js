import { combineReducers } from 'redux'
import * as actionTypes from '../actions/action-types'

/** 
 * @param {object} action - Second param as object with type and payload as properties
 */

const sidebar = (state = false, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_SIDEBAR:
      return payload.sidebar
    default:
      return state
  }
}

const flickrGallery = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.SET_FLICKR_GALLERY:
      return payload.flickrGallery
    default:
      return state
  }
}

const addToArchive = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TO_ARCHIVE:
      return [ ...state, payload.image ]
      case actionTypes.DELETE_IMG:
        return state.filter(img => {
          return img !== payload.image
        })
    default:
      return state
  }
}

// export default function allReducers (state = {}, action) {
//   return {
//     sidebar: sidebar(state.sidebar, action),
//     flickrGallery: flickrGallery(state.flickrGallery, action)
//   }
// }

// Varje reducer hanterar sin egen state key. Reducer namnet blir exakt den keyn..
// Combinereducers är utility som gör samma som ovanstående allReducers funktion
export default combineReducers({
  sidebar,
  flickrGallery,
  archive: addToArchive
})
