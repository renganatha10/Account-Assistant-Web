import { TRAVERSE_ITEM } from '../constants/ActionTypes'

const traversal = (state,action) => {
    switch (action.type) {
        case TRAVERSE_ITEM:
            return state;
        default:
            return state;
    }
} 


export default traversal