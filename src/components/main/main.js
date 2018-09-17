import React, { Component } from 'react';
import PhoneListContainer from '../phonelistcontainer/PhoneListContainer';

class Main extends Component {
  render() {
    return (
      <main className="wrapper">
        <section className="phones__container">
          <PhoneListContainer />
        </section>
      </main>
    );
  }
}

export default Main;