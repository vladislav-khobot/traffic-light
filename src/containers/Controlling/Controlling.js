import './Controlling.scss';
import { Button } from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { actionColorChange } from '../../store/actionCreators/actionColorChange';
import { actionStartAutoMode } from '../../store/actionCreators/actionStartAutoMode';
import { actionStopAutoMode } from '../../store/actionCreators/actionStopAutoMode';
import { actionChangeTimeout } from '../../store/actionCreators/actionChangeTimeout';
import { Input } from '../../components/Input';

function Controlling() {
  const dispatch = useDispatch();
  const autoModeID = useSelector(state => state.autoModeID);
  const timeOut = useSelector(state => state.timeOut);

  const onNextStep = useCallback(() => {
    dispatch(actionColorChange());
  }, [dispatch]);

  const onStartAutoMode = useCallback(() => {
    const autoModeID = setInterval(() => {
      dispatch(actionColorChange());  
    }, timeOut);

    dispatch(actionStartAutoMode(autoModeID));
  }, [dispatch, timeOut]);

  const onStopAutoMode = useCallback(() => {
    clearInterval(autoModeID);
    dispatch(actionStopAutoMode());
  }, [dispatch, autoModeID]);

  const onChangeInterval = useCallback((event) => {
    const newInterval = event.target.value * 1000;
    dispatch(actionChangeTimeout(newInterval));
  }, [dispatch]);

  return (
    <div className="controlling">
      <Button name="Next step" onClick={onNextStep}/>
      <Input value={timeOut / 1000} onChange={onChangeInterval} />
      <Button name="Start auto-mode" onClick={onStartAutoMode}/>
      <Button name="Stop auto-mode" onClick={onStopAutoMode}/>
    </div>
  );
}

export { Controlling };