import {
  GET_COUNTER_VALUE,
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  COUNTER_RESET,
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
