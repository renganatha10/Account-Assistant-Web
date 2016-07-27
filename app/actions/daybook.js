export const DISPLAY_ALL_DETAILS = "DISPLAY_ALL_DETAILS";


export function displayAllDetails(daybooks){
  return {
    type : DISPLAY_ALL_DETAILS,
    daybooks
  }
}
