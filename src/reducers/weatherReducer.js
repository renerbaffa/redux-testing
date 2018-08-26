import { FETCHING_WEATHER } from '../constants/weather';
import { FAIL, START, SUCCESS } from '../constants/communication';

const INITIAL_STATE = {
  hasError: false,
  isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${FETCHING_WEATHER}${START}`:
      return {
        ...state,
        isLoading: true,
      };
    case `${FETCHING_WEATHER}${SUCCESS}`:
      return {
        ...state,
        isLoading: false,
        temperature: action.payload.TEMPERATURE,
      };
    case `${FETCHING_WEATHER}${FAIL}`:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    default:
      return state;
  }
}
