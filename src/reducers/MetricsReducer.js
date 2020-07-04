import {
  FETCH_METRICS,
  FETCH_METRICS_SUCCESS,
  FETCH_METRICS_FAIL,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  cpuUsage: null,
  memUsage: null,
  networkTraffic: null,
  saturation: null,
  isLoading: null,
  isLoggedIn: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_METRICS_FAIL:
      return {...state, isLoading: true};
    case FETCH_METRICS:
      return {...state, isLoading: true};
    case FETCH_METRICS_SUCCESS:
      return {
        ...state,
      };
    default:
      return state;
  }
};
