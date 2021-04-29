import './Board.scss';
import { Circle } from '../../components/Circle';

function Board() {
  return (
    <div className="board">
      <Circle color="" />
      <Circle color="" />
      <Circle color="" />
    </div>
  );
}

export { Board };