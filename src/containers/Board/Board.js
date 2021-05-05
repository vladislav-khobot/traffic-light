import { useSelector } from 'react-redux';

import { selectRed, selectYellow, selectGreen } from '../../store/colors/selectors';
import { Circle } from '../../components/Circle';

import './Board.scss';


function Board() {
  const colorRed = useSelector(selectRed) && 'red';
  const colorYellow = useSelector(selectYellow) && 'yellow';
  const colorGreen = useSelector(selectGreen) && 'green';
  
  return (
    <div className="board">
      <Circle color={colorRed} />
      <Circle color={colorYellow} />
      <Circle color={colorGreen} />
    </div>
  );
}

export { Board };