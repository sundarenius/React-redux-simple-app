import {
  applyMiddleware,
  compose,
  combineReducers,
  createStore
} from 'redux'
import thunk from 'redux-thunk'
import initialState from './initialState'
import Reducers from './reducers/index'

const allReducers = combineReducers(Reducers)

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(
  allReducers,
  initialState,
  allStoreEnhancers
)

export default store
