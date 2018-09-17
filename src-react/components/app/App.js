import React, { Component } from 'react';
import Header from '../header/Header';
import PhoneListContainer from '../phonelistcontainer/PhoneListContainer';
import axios from 'axios';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phones: [],
      loading: true
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/phones')
      .then(results => {
        const { phones } = results.data;
        const delayMiliseconds = 3500;
        setTimeout(() => {
          this.setState({
            phones,
            loading: false
          })
        }, delayMiliseconds);
      });
  }

  _renderPhonesCatalog() {
    const { phones } = this.state;
    return (
      <section className="phones__container">
        <PhoneListContainer
          phones={phones}
        />
      </section>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="App">
        <Header />
        <main className="wrapper">
          {loading ? <div className="loader"></div>
            : this._renderPhonesCatalog()}
        </main>
      </div>
    );
  }
}

export default App;
