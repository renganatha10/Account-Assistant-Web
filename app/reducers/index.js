import { combineReducers } from 'redux';
import pawn from './pawn';
import daybook from './daybook';
import depositor from './depositor';

import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
  daybook,
  pawn,
  depositor,
  form : formReducer
})

export default rootReducer
