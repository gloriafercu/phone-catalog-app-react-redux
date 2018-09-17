import React from 'react';
import App from './../app/App';
import { Link, Route, Switch } from 'react-router-dom';
import './phonedetailcomponent.css';

class PhoneDetailComponent extends React.Component {
  render() {
    const { phones } = this.props;
    return (
      <div className="phone__detail">
        <div className="phone__detail__background">
          <div className="phone__detail__card">
            <Link className="close" to='/'>
              <div className="button--close"><span className="btn-x">X</span></div>
            </Link>
            <Switch>
              <Route exact path="/" component={App} />
            </Switch>

            <p className="phone--name">{phones.name}</p>
            <p className="phone--color"> Color:
              <span className={`phone--color--${phones.color}`}></span>
              <span className="phone--color--text">{phones.color}</span>
            </p>
            <p className="phone--memory">Memory: {phones.memory}</p>
            <p className="phone--ram">RAM: {phones.ram}</p>
            <p className="phone--batery"> Batery: {phones.batery}</p>
            <p className="phone--price">Price: {phones.price}</p>
            <div className="phone--rating">
              <span className="phone--rating--text">{phones.rating}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PhoneDetailComponent;