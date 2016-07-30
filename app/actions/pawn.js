export const DISPLAY_ALL_PAWN_DETAILS = "DISPLAY_ALL_PAWN_DETAILS";
export const DISPLAT_PAWN_DETAILS_ID = "DISPLAT_PAWN_DETAILS_ID";
export const RESET_ALL = "RESET_ALL";
export const RESET_INDIVIDUAL_PAWN = "RESET_INDIVIDUAL_PAWN";



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

export function resetIndividualPawn(){
   return {
     type : RESET_INDIVIDUAL_PAWN
   }
}

export function resetAll(){
  return{
    type : RESET_ALL
  }
}
