import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

import rootReducer from './reducers'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

var initialState = {
   data :  [{ isSelected : true, isFolder: true,  name: 'renga' , id : 0, 
                                children : [ {  isSelected : false, isFolder: true,    name : 'ramesh' , id : 1 ,  children : []}  ]},
            { name : 'ramesh' , id : 1 ,  
                                children : [{  isSelected : false, isFolder: false,      name : 'ramesh' , id : 1 ,  
                                                            children : [{ name : 'karthik' , id : 4 ,  children : []}]},
                                            {   isSelected : false, isFolder: true,    name : 'ramu' , id : 2 ,  
                                                            children : []}]},
            {  isSelected : false, isFolder: true,  name : 'ravi' , id : 2,  children : [] }] ,
    toggleTextView : false,
    traversal : []
}
let store = createStore(initialState)
render(
     <Provider store={store}>
         <App />
     </Provider>,
  document.getElementById('root')
)
