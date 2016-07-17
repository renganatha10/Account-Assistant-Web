import { combineReducers } from 'redux'
import listOperation from './listOperation'
import traversal from './traversal'

const rootReducer = combineReducers({
  listOperation,traversal
})

export default rootReducer
