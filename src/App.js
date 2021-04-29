import './assets/styles/App.scss';
import { Board } from './containers/Board';
import { Controlling } from './containers/Controlling/Controlling';

function App() {
  return (
    <div className="app">
      <Board />
      <Controlling />  
    </div>
  );
}

export default App;
