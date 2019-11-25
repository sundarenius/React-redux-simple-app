import * as actionTypes from './action-types'

export const dummyAction = (newState) => ({
  type: actionTypes.UPDATE_DUMMY,
  payload: {
    dummyState: newState
  }
})
