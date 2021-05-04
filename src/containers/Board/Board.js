import { useSelector } from 'react-redux';

import { selectClassRed, selectClassYellow, selectClassGreen } from '../../store/selectors';
import { Circle } from '../../components/Circle';

import './Board.scss';

function Board() {
  const colorRed = useSelector(selectClassRed);
  const colorYellow = useSelector(selectClassYellow);
  const colorGreen = useSelector(selectClassGreen);
  
  return (
    <div className="board">
      <Circle color={colorRed} />
      <Circle color={colorYellow} />
      <Circle color={colorGreen} />
    </div>
  );
}

export { Board };