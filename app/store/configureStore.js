import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers'
import createLogger from 'redux-logger';

const logger = createLogger();
export default function configureStore(intitial) {
  const store = createStore(rootReducer, intitial)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }
  return store
}
