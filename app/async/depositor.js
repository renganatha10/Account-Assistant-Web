
import config from './../config'

export async function addDepositorDetails(fieldValues){
   const address = `${config.server}depositor`
   return await fetch(address,
    { method : 'POST' ,
      headers : {
        'Accept': 'application/json',
        'Content-Type': 'application/json'  },
    body : JSON.stringify(fieldValues) }).then(checkStatus).catch(err => console.log("Error in Action in we chat login"));
}

export async function getDepositorById(id){
   const address = `${config.server}depositor/${id}`
   return await fetch(address).then(checkStatus).catch(err => console.log("Error in Action in we chat login"));

}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response.json()
  } else if(response.status == 401){
     return { message : 401 }
  }  else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}
