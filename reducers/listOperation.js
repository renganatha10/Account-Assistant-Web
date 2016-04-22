import { ADD_FOLDER, ADD_FILE, DELETE_ITEM, EDIT_ITEM } from '../constants/ActionTypes'

const listOperation = (state,action) => {
    switch (action.type) {
        case ADD_FOLDER:
            return state;
        case ADD_FILE : 
            return state;
        case DELETE_ITEM:
            return state;
        case EDIT_ITEM:
            return state;
        default:
            return state;
    }
} 


export default listOperation
