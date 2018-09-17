import React from 'react';
import './header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="app__header">
        <h1 className="app__title">Phone Catalog App</h1>
      </header>
    );
  }
}

export default Header;