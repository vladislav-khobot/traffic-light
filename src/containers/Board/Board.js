import './Board.scss';
import { Circle } from '../../components/Circle';
import { useSelector } from 'react-redux';

function Board() {
  const colorRed = useSelector(store => store.colorRed) && 'red';
  const colorYellow = useSelector(store => store.colorYellow) && 'yellow';
  const colorGreen = useSelector(store => store.colorGreen) && 'green';
  return (
    <div className="board">
      <Circle color={colorRed} />
      <Circle color={colorYellow} />
      <Circle color={colorGreen} />
    </div>
  );
}

export { Board };