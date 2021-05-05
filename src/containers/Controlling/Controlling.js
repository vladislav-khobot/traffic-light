import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actionColorChange } from '../../store/colors/actions';
import { actionStartAutoMode } from '../../store/colors/actions';
import { actionStopAutoMode } from '../../store/colors/actions';
import { actionChangeTimeout } from '../../store/colors/actions';
import { selectAutoModeID, selectTimeOut } from '../../store/colors/selectors';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import './Controlling.scss';

function Controlling() {
  const dispatch = useDispatch();
  const autoModeID = useSelector(selectAutoModeID);
  const timeOut = useSelector(selectTimeOut);

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