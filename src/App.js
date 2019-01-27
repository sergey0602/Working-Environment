import React, { Component, StrictMode } from 'react';
import { hot } from 'react-hot-loader/root';
import { Header } from 'Components';
// import { app } from "./App.scss";

class App extends Component {
  render() {
    return (
      <StrictMode>
        <Header name="Sergey" />
      </StrictMode>
    );
  }
}

export default (process.env.NODE_ENV === 'development' ? hot(App) : App);
