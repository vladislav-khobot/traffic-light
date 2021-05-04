import { CHANGE_TIMEOUT } from "../actions/changeTimeout";

function actionChangeTimeout(timeOut) {
  return {
    type: CHANGE_TIMEOUT,
    timeOut,
  }
}

export { actionChangeTimeout };