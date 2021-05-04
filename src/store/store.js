import { createStore, compose } from 'redux';

import { colorReducer } from './reducers/colorReducer';
import { DevTools } from './devTools';

// as a React component
// const enhancer = compose(
//   DevTools.instrument(),
// );

// as a Browser Extension
const composeEnhancers = (
  typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
)
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 20 })
  : compose;

// const store = createStore(colorReducer, enhancer);
const store = createStore(colorReducer, composeEnhancers());

export { store };