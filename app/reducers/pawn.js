import {DISPLAY_ALL_PAWN_DETAILS} from './../actions/pawn'


const initialState = {
  pawns : []
}

export default function(state = initialState,action) {
    switch (action.type){
        case DISPLAY_ALL_PAWN_DETAILS:
            return { ...state, pawns : action.pawns }
    }
    return state;
}
