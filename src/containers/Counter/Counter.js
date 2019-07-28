import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  getCounterValue,
  counterIncrement,
  counterDecrement,
  counterReset,
} from 'Actions';
import { counter, counterButtons, counterResult } from './Counter.scss';

const Counter = () => {
  const counterStore = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const getValue = () => {
    dispatch(getCounterValue());
  };
  const increment = () => {
    dispatch(counterIncrement());
  };
  const decrement = () => {
    dispatch(counterDecrement());
  };
  const reset = () => {
    dispatch(counterReset());
  };

  React.useEffect(() => {
    getValue();
  }, []);

  return (
    counterStore.error || (
      <div className={counter}>
        <p className={counterResult}>{counterStore.counterValue}</p>
        <p className={counterButtons}>
          <button type="button" onClick={increment}>
            Increment
          </button>
          <button type="button" onClick={decrement}>
            Decrement
          </button>
          <button type="button" onClick={reset}>
            Reset
          </button>
        </p>
      </div>
    )
  );
};

export default React.memo(Counter);
