import React from 'react'
import { render } from 'react-dom'

import App from './components/App'


var initialState = {
   data :  [{ name: 'renga' , id : 0, 
                                children : [ { name : 'ramesh' , id : 1 ,  children : []}  ]},
            { name : 'ramesh' , id : 1 ,  
                                children : [{ name : 'ramesh' , id : 1 ,  
                                                            children : [{ name : 'karthik' , id : 4 ,  children : []}]},
                                            { name : 'ramu' , id : 2 ,  
                                                            children : []}]},
            { name : 'ravi' , id : 2,  children : [] }] 
}

render(
    <App init={initialState} />,
  document.getElementById('root')
)
