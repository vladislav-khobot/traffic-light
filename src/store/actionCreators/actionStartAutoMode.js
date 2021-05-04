import { START_AUTO_MODE } from '../actions/startAutoMode';

function actionStartAutoMode(autoModeID) {
  return {
    type: START_AUTO_MODE,
    autoModeID,
  }
}

export { actionStartAutoMode };