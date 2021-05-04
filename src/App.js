import { Provider } from 'react-redux';

import { store } from './store/store';
import { DevTools } from './store/devTools';
import { Board } from './containers/Board';
import { Controlling } from './containers/Controlling';
import './assets/styles/App.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Board />
        <Controlling />
        {/*<DevTools /> if use as a React Component*/}
      </div>
    </Provider>
  );
}

export default App;
