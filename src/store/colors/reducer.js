import { initialState } from '../initialState';
import { getColorsCombination } from '../../helpers';

const CHANGE_TIMEOUT = 'CHANGE_TIMEOUT';
const COLOR_CHANGE = 'COLOR_CHANGE';
const START_AUTO_MODE = 'START_AUTO_MODE';
const STOP_AUTO_MODE = 'STOP_AUTO_MODE';

function colorReducer(state = initialState, action) {
  switch(action.type) {
    case COLOR_CHANGE:
      const { colorRed, colorYellow, colorGreen } = getColorsCombination(state.colorRed, state.colorYellow, state.colorGreen);
      return {
        ...state,
        colorRed,
        colorYellow,
        colorGreen,
      }

    case START_AUTO_MODE:
      return {
        ...state,
        autoModeID: action.autoModeID,
      }

    case STOP_AUTO_MODE:
      return {
        ...state,
        autoModeID: null,
      }

    case CHANGE_TIMEOUT:
      return {
        ...state,
        timeOut: action.timeOut,
      }

    default: return state;
  }
}

export { CHANGE_TIMEOUT, COLOR_CHANGE, START_AUTO_MODE, STOP_AUTO_MODE, colorReducer };