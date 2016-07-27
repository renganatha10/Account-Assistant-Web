
import config from './../config'


function objectToQuery(obj) {
  return Object.keys(obj).filter(k => obj[k] !== undefined).map((item) =>
    Array.isArray(obj[item]) ?    `${item}=${obj[item].map(items => `${items}`).join()}` :
    `${item}=${obj[item]}`).join('&');
}



export async function addPawnDetails(fieldValues){
   const address = `${config.server}pawn`;
   return await fetch(address,
    { method : 'POST' ,
      headers : {
        'Accept': 'application/json',
        'Content-Type': 'application/json'  },
    body : JSON.stringify(fieldValues) }).then(checkStatus).catch(err => console.log("Error in Action in we chat login"));
}


export async function getPawnDetails(){
  const address = `${config.server}pawn`;
  return await fetch(address).then(checkStatus).catch(err => console.log("Error in Action in we chat login", err));
}


export async function getDepositorById(id){
   const address = `${config.server}pawn/${id}`
   return await fetch(address).then(checkStatus).catch(err => console.log("Error in Action in we chat login"));
}

export async function searchPawnService(fieldValues){
  const address = `${config.server}search/pawn?${objectToQuery(fieldValues)}`;
  return await fetch(address).then(checkStatus).catch(err => console.log("Error in Action in we chat login"));
}

function checkStatus(response) {
  return response.json()
}
