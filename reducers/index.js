import { combineReducers } from 'redux'
import listOperation from './listOperation'
import toggleTextView from './toggleTextView'
import traversal from './traversal'

const rootReducer = combineReducers({
  listOperation,toggleTextView,traversal
})

export default rootReducer
