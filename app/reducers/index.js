import { combineReducers } from 'redux'
import pawn from './pawn'
import daybook from './daybook'

import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
  daybook,
  pawn,
  form : formReducer
})

export default rootReducer
