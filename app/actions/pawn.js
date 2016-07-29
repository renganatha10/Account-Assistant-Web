export const DISPLAY_ALL_PAWN_DETAILS = "DISPLAY_ALL_PAWN_DETAILS";

export const DISPLAT_PAWN_DETAILS_ID = "DISPLAT_PAWN_DETAILS_ID";



export function displayAllPawnDetails(pawns){
  return {
    type : DISPLAY_ALL_PAWN_DETAILS,
    pawns
  }
}

export function displayPawnDetailsById(pawn){
  return{
    type : DISPLAT_PAWN_DETAILS_ID,
    pawn
  }
}
