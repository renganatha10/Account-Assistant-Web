
require("babel-core/register");
require("babel-polyfill");

import React from 'react'
import { render } from 'react-dom'
import Router from './app/Router'

import rootReducer from './app/reducers'
import { Provider } from 'react-redux'
import configureStore from './app/store/configureStore'


let store = configureStore();

render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('root')
)
