import { createStore } from 'redux';

import { colorReducer } from './colors/reducer';

const store = createStore(colorReducer);

export { store };