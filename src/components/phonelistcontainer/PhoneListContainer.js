import React from 'react';
import PhoneDetailComponent from '../phonedetailcomponent/PhoneDetailComponent';
import './phonelistcontainer.css';
import { Link, Route, Switch } from 'react-router-dom';

class PhoneListContainer extends React.Component {
  render() {
    const { phones } = this.props;
    return Object.keys(phones).map(phone =>
      <div className="phone__card" key={phones[phone].id}>
        <Link className="link" to={`/phonelistcontainer/${phones[phone].id}`}>
          <img className="phone__img" src={phones[phone].image} alt="móvil" />
          <p className="phone__name">{phones[phone].name}</p>
        </Link>

        <Switch>
          <Route exact path={`/phonelistcontainer/${phones[phone].id}`} render={() =>
            <PhoneDetailComponent
              phones={phones[phone]}
            />} />
        </Switch>
      </div>
    );
  }
}


export default PhoneListContainer;