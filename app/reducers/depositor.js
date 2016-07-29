import {DISPLAY_DEPOSITOR_DETAILS} from '../actions/depositor';

const initialState = {
  deposit : {},
  daybook : []
}

export default function(state = initialState,action) {
    switch (action.type){
        case DISPLAY_DEPOSITOR_DETAILS:
            return  { ...state , deposit : action.depositor.deposit , daybook : action.depositor.dayBook  }
    }
    return state;
}
