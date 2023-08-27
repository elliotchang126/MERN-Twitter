
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import session from './session';
import errors from './errors';
import tweets from './tweets';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  session,
  errors,
  tweets
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;