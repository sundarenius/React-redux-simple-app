import * as ActionTypes from '../actions/action-types'

/** 
 * @param {object} action - Second param as object with type and payload as properties
 */

const dummyReducer = (state = '', { type, payload }) => {
  switch (type) {
    case ActionTypes.UPDATE_DUMMY:
      return payload.dummyState
    default:
      return state
  }
}

export default {
  dummyState: dummyReducer
}