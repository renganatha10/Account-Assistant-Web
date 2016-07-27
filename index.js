
require("babel-core/register");
require("babel-polyfill");

import React from 'react'
import { render } from 'react-dom'
import Router from './app/Router'

import rootReducer from './app/reducers'
import { Provider } from 'react-redux'
import configureStore from './app/store/configureStore'


const initialState = {
    listOperation: {
        0: { id: 0, isFolder: true, name: 'Root', childIds: [1, 3, 5] },
        1: { id: 1, isFolder: true, name: 'ravi', childIds: [2] },
        2: { id: 2, isFolder: false, name: 'karthi', childIds: [] },
        3: { id: 3, isFolder: true, name: 'santhiya', childIds: [4] },
        4: { id: 4, isFolder: false, name: 'iyya', childIds: [] },
        5: { id: 5, isFolder: false, name: 'ranjitha', childIds: [] }
    },
    traversal: { currentID: 0, parentId: 0 }
}

let store = configureStore(initialState);

render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('root')
)
