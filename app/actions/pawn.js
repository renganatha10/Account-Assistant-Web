export const DISPLAY_ALL_PAWN_DETAILS = "DISPLAY_ALL_PAWN_DETAILS";



export function displayAllPawnDetails(pawns){
  return {
    type : DISPLAY_ALL_PAWN_DETAILS,
    pawns 
  }
}
