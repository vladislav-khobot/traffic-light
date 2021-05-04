import { COLOR_CHANGE } from "../actions/colorChange";
import { START_AUTO_MODE } from "../actions/startAutoMode";
import { STOP_AUTO_MODE } from "../actions/stopAutoMode";
import { CHANGE_TIMEOUT } from '../actions/changeTimeout';
import { initialState } from '../initialState';

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

function getColorsCombination(colorRed, colorYellow, colorGreen) {
  const colorsCombination = {
    'false-false-false': { colorRed: true, colorYellow: false, colorGreen: false},
    'true-false-false': { colorRed: true, colorYellow: true, colorGreen: false},
    'true-true-false': { colorRed: false, colorYellow: false, colorGreen: true},
    'false-false-true': { colorRed: false, colorYellow: true, colorGreen: false},
    'false-true-false': { colorRed: true, colorYellow: false, colorGreen: false},
  }  

  return colorsCombination[`${colorRed}-${colorYellow}-${colorGreen}`];
}

export { colorReducer };