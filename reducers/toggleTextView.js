import { SHOW_TEXT_BOX } from '../constants/ActionTypes'

const toggleTextView = (state,action) => {
    switch (action.type) {
        case SHOW_TEXT_BOX:
            return state;
        default:
            return state;
    }
} 


export default toggleTextView
