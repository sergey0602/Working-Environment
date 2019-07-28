import React, { StrictMode } from 'react';
import { hot } from 'react-hot-loader/root';
import { Counter } from 'Containers';
// import { app } from "./App.scss";

const App = () => {
  return (
    <StrictMode>
      <Counter />
    </StrictMode>
  );
};

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
