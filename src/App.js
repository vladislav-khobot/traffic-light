import './assets/styles/App.scss';
import { Board } from './containers/Board';
import { Controlling } from './containers/Controlling';
import { Provider } from 'react-redux';
import { store } from './store/store';

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
