import { GET_PLACES, SET_PLACES, PLACES_FAILURE } from 'Actions/constants';
import { defaultRows } from './helpers';

export default (state = defaultRows, action) => {
  switch (action.type) {
    case GET_PLACES:
      return { ...state, loading: true, error: null };

    case SET_PLACES:
      return { ...state, data: action.payload, loading: false };

    case PLACES_FAILURE:
      return { ...state, loading: false, error: action.payload.message };

    default:
      return state;
  }
};
