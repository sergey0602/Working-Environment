import { combineReducers } from 'redux';
import counter from './counter';
import places from './places';

const rootReducer = combineReducers({
  counter,
  places,
});

export default rootReducer;
