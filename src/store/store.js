import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { colorReducer } from './colors/reducer';

const store = createStore(
  colorReducer, composeWithDevTools(
  applyMiddleware())
  );

export { store };