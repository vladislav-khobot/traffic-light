import { createStore } from 'redux';
import { colorReducer } from './reducers/colorReducer';

const store = createStore(colorReducer);

export { store };