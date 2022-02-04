import {
  GET_COUNTER_VALUE,
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  COUNTER_RESET,
  GET_PLACES,
} from './constants';

export const getCounterValue = () => ({
  type: GET_COUNTER_VALUE,
});

export const counterIncrement = () => ({
  type: COUNTER_INCREMENT,
});

export const counterDecrement = () => ({
  type: COUNTER_DECREMENT,
});

export const counterReset = () => ({
  type: COUNTER_RESET,
});

export const getPlaces = () => ({
  type: GET_PLACES,
});
