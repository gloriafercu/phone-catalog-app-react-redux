import React from 'react';
import PhoneDetailComponent from '../phonedetailcomponent/PhoneDetailComponent';
import './phonelistcontainer.css';
//import { Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPhones, getDetailPhones } from '../../actions/myactions';

class PhoneListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.props.getPhones();
  }
  handleClick(e) {

    this.props.getDetailPhones(e);
  }

  _renderPhonesCatalog() {
    return this.props.phoneslist.map((phone, index) => {
      return (
        <li className="phone__card" key={index} onClick={this.handleClick}>
          <img className="phone__img" src={phone.image} alt="phone image" />
          <p className="phone__name">{phone.name}</p>
          <PhoneDetailComponent
            name={phone.name}
            color={phone.color}
            memory={phone.memory}
            batery={phone.batery}
            price={phone.price}
            rating={phone.rating}
          />
        </li >
      )
    });
  }

  render() {
    return (
      <section>
        {this.props.loading ? <div className="loader"></div> : ''}
        <ul className="phones__container">
          {this._renderPhonesCatalog()}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    phoneslist: state.getPhonesReducer.phoneslist,
    ishidden: state.getDetailsReducer.ishidden,
    loading: state.getPhonesReducer.loading
  }
}

export default connect(mapStateToProps, { getPhones, getDetailPhones })(PhoneListContainer);