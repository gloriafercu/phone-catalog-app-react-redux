import React from 'react';
//import PhoneDetailComponent from '../phonedetailcomponent/PhoneDetailComponent';
import './phonelistcontainer.css';
//import { Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPhones } from '../../actions/myactions';

class PhoneListContainer extends React.Component {

  componentWillMount() {
    this.props.getPhones();
    console.log("componentwillmount: " + this.props.getPhones());
  }


  _renderPhonesCatalog() {
    console.log(this.props.phoneslist)
    return this.props.phoneslist.map((phone, index) => {
      <li className="phone__card" key={index}>
        <img className="phone__img" src={phone.image} alt="phone image" />
        <p className="phone__name">{phone.name}</p>
      </li>
    });
  }

  render() {
    return (
      <ul className="phones__container">
        {this._renderPhonesCatalog()}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    phoneslist: state.phonelist,
    loading: state.loading
  }
}

export default connect(mapStateToProps, { getPhones })(PhoneListContainer);