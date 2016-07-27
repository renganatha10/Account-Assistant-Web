import {DISPLAY_ALL_DETAILS} from '../actions/daybook';

const initialState = {
  daybooks : []
}

export default function(state = initialState,action) {
    switch (action.type){
        case DISPLAY_ALL_DETAILS:
            return {...state , daybooks : action.daybooks }
    }
    return state;
}
