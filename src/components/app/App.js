import React, { Component } from 'react';
import Header from '../header/Header';
import Main from '../main/Main';
import './app.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
