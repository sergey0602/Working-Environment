import { put, takeEvery, call } from 'redux-saga/effects';
import get from 'lodash/get';

import {
  GET_COUNTER_VALUE,
  SET_COUNTER_VALUE,
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  COUNTER_RESET,
  COUNTER_FAILURE,
} from 'Actions/constants';

import fetch from '../api/fetch';

function* getCounterValueAsync() {
  try {
    const response = yield call(() => fetch({ method: 'GET' }));

    yield put({ type: SET_COUNTER_VALUE, payload: get(response, 'value') });
  } catch (error) {
    yield put({ type: COUNTER_FAILURE, payload: error });
  }
}

function* counterIncrementAsync() {
  try {
    const response = yield call(() =>
      fetch({ method: 'PUT', path: 'increment' })
    );

    yield put({ type: SET_COUNTER_VALUE, payload: get(response, 'value') });
  } catch (error) {
    yield put({ type: COUNTER_FAILURE, payload: error });
  }
}

function* counterDecrementAsync() {
  try {
    const response = yield call(() =>
      fetch({ method: 'PUT', path: 'decrement' })
    );

    yield put({ type: SET_COUNTER_VALUE, payload: get(response, 'value') });
  } catch (error) {
    yield put({ type: COUNTER_FAILURE, payload: error });
  }
}

function* counterResetAsync() {
  try {
    const response = yield call(() => fetch({ method: 'PUT', path: 'reset' }));

    yield put({ type: SET_COUNTER_VALUE, payload: get(response, 'value') });
  } catch (error) {
    yield put({ type: COUNTER_FAILURE, payload: error });
  }
}

export default function* aboutUsGetData() {
  yield takeEvery(GET_COUNTER_VALUE, getCounterValueAsync);
  yield takeEvery(COUNTER_INCREMENT, counterIncrementAsync);
  yield takeEvery(COUNTER_DECREMENT, counterDecrementAsync);
  yield takeEvery(COUNTER_RESET, counterResetAsync);
}
