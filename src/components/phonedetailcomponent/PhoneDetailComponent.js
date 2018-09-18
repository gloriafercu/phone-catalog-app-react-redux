import React from 'react';
import './phonedetailcomponent.css';

class PhoneDetailComponent extends React.Component {
  render() {
    return (
      <div className="phone__detail hidden">
        <div className="phone__detail__background">
          <div className="phone__detail__card">
            <p className="phone--name">{this.props.name}</p>
            <p className="phone--color"> Color:
              <span className={`phone--color--${this.props.color}`}></span>
              <span className="phone--color--text">{this.props.color}</span>
            </p>
            <p className="phone--memory">Storage: {this.props.memory}</p>
            <p className="phone--ram">RAM: {this.props.ram}</p>
            <p className="phone--batery"> Batery: {this.props.batery}</p>
            <p className="phone--price">Price: {this.props.price}</p>
            <div className="phone--rating">
              <span className="phone--rating--text">{this.props.rating}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PhoneDetailComponent;