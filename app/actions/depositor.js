export const DISPLAY_DEPOSITOR_DETAILS = "DISPLAY_DEPOSITOR_DETAILS";


export function displayDepositorDetails(depositor){
  return {
    type : DISPLAY_DEPOSITOR_DETAILS,
    depositor
  }
}
