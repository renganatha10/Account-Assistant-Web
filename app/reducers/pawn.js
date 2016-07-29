import {DISPLAY_ALL_PAWN_DETAILS , DISPLAT_PAWN_DETAILS_ID} from './../actions/pawn'


const initialState = {
  pawns : [],
  individualPawn : {
    pawn : {},
    daybook : []
  }
}

export default function(state = initialState,action) {
    switch (action.type){
        case DISPLAY_ALL_PAWN_DETAILS:
            return { ...state, pawns : action.pawns }
        case DISPLAT_PAWN_DETAILS_ID:
        return { ...state , individualPawn :
                    { ...state.individualPawn ,
                            pawn :action.pawn.pawn ,
                            daybook : action.pawn.dayBook  }}

    }
    return state;
}
