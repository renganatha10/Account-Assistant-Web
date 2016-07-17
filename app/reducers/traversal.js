import { TRAVERSE_ITEM } from '../constants'


const traversal = (state = 0 ,action) => {
    switch (action.type) {
        case TRAVERSE_ITEM:
            return {currentID : action.id ,parentId : action.parentId} ;
        default :
            return state;
    }
} 


export default traversal