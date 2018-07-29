import React, { Component, StrictMode } from 'react';
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

export default App;
