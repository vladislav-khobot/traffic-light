import { Provider } from 'react-redux';

import { Board } from './containers/Board';
import { Controlling } from './containers/Controlling';
import { store } from './store/store';

import './assets/styles/App.scss';

function App() {
  
  return (
    <Provider store={store}>
      <div className="app">
        <Board />
        <Controlling />  
      </div>
    </Provider>
  );
}

export default App;
