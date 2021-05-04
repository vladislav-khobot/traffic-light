import './Controlling.scss';
import { Button } from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { actionColorChange } from '../../store/actionCreators/actionColorChange';
import { actionStartAutoMode } from '../../store/actionCreators/actionStartAutoMode';
import { actionStopAutoMode } from '../../store/actionCreators/actionStopAutoMode';

function Controlling() {
  const dispatch = useDispatch();
  const autoModeID = useSelector(state => state.autoModeID);

  const onNextStep = useCallback(() => {
    dispatch(actionColorChange());
  }, [dispatch]);

  const onStartAutoMode = useCallback(() => {
    const autoModeID = setInterval(() => {
      dispatch(actionColorChange());  
    }, 1000);

    dispatch(actionStartAutoMode(autoModeID));
  }, [dispatch]);

  const onStopAutoMode = useCallback(() => {
    clearInterval(autoModeID);
    dispatch(actionStopAutoMode());
  }, [dispatch, autoModeID]);

  return (
    <div className="controlling">
      <Button name="Next step" onClick={onNextStep}/>
      <Button name="Start auto-mode" onClick={onStartAutoMode}/>
      <Button name="Stop auto-mode" onClick={onStopAutoMode}/>
    </div>
  );
}

export { Controlling };