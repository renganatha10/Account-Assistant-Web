import {DISPLAY_ALL_PAWN_DETAILS , DISPLAT_PAWN_DETAILS_ID , RESET_ALL , RESET_INDIVIDUAL_PAWN} from './../actions/pawn'


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
        case RESET_INDIVIDUAL_PAWN :
              return { ...state , individualPawn : initialState.individualPawn }
        case  RESET_ALL :
            return initialState

    }
    return state;
}
