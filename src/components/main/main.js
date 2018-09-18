import React, { Component } from 'react';
import PhoneListContainer from '../phonelistcontainer/PhoneListContainer';

class Main extends Component {
  render() {
    return (
      <main className="wrapper">
        <PhoneListContainer />
      </main>
    );
  }
}

export default Main;