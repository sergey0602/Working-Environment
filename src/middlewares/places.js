import { put, takeEvery, call } from 'redux-saga/effects';

import { GET_PLACES, SET_PLACES, PLACES_FAILURE } from 'Actions/constants';

import fetch from '../api/fetch';

function* getPlacesAsync() {
  try {
    const response = yield call(() => fetch({ method: 'GET' }));

    const parsedResponse = [
      { isBooked: false, place: 1 },
      { isBooked: false, place: 2 },
      { isBooked: false, place: 3 },
      { isBooked: false, place: 4 },
      { isBooked: false, place: 5 },
      { isBooked: false, place: 6 },
      { isBooked: false, place: 7 },
      { isBooked: false, place: 8 },
      { isBooked: false, place: 9 },
      { isBooked: false, place: 10 },
      { isBooked: false, place: 11 },
      { isBooked: false, place: 13 },
      { isBooked: false, place: 14 },
      { isBooked: false, place: 15 },
      { isBooked: false, place: 16 },
    ];

    yield put({ type: SET_PLACES, payload: parsedResponse });
  } catch (error) {
    yield put({ type: PLACES_FAILURE, payload: error });
  }
}

export default function* places() {
  yield takeEvery(GET_PLACES, getPlacesAsync);
}
