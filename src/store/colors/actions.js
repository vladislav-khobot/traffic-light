import { CHANGE_TIMEOUT } from './reducer';
import { COLOR_CHANGE } from './reducer';
import { START_AUTO_MODE } from './reducer';
import { STOP_AUTO_MODE } from './reducer';

export function actionChangeTimeout(timeOut) {

  return {
    type: CHANGE_TIMEOUT,
    timeOut,
  }
}

export function actionColorChange() {

  return {
    type: COLOR_CHANGE,
  }
}

export function actionStartAutoMode(autoModeID) {

  return {
    type: START_AUTO_MODE,
    autoModeID,
  }
}

export function actionStopAutoMode() {
  
  return {
    type: STOP_AUTO_MODE,
  }
}