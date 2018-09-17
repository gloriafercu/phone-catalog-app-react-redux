import React, { Component } from 'react';
import Header from '../header/Header';

import { getPhones } from '../../actions/myactions';

import './app.css';

class App extends Component {

  // componentWillMount() {
  //   this.props.getPhones();
  // }

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
