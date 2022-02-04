import { all } from 'redux-saga/effects';
import counter from './counter';
import places from './places';

export default function* rootSaga() {
  yield all([counter(), places()]);
}
