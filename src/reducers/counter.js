import {
  GET_COUNTER_VALUE,
  SET_COUNTER_VALUE,
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  COUNTER_RESET,
  COUNTER_FAILURE,
} from 'Actions/constants';

const initialState = {
  counterValue: 0,
  spinner: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTER_VALUE:
    case COUNTER_INCREMENT:
    case COUNTER_DECREMENT:
    case COUNTER_RESET:
      return { ...state, spinner: true, error: null };

    case SET_COUNTER_VALUE:
      return { ...state, counterValue: action.payload, spinner: false };

    case COUNTER_FAILURE:
      return { ...state, spinner: false, error: action.payload.message };

    default:
      return state;
  }
};
