import './Controlling.scss';
import { Button } from '../../components/Button';

function Controlling() {
  return (
    <div className="controlling">
      <Button name="Next step"/>
      <Button name="Start auto-mode"/>
      <Button name="Stop auto-mode"/>
    </div>
  );
}

export { Controlling };