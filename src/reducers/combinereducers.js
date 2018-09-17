import { combineReducers } from 'redux';
import { getPhonesReducer } from './myreducer';

const rootReducer = combineReducers({
  getPhones: getPhonesReducer
});

export default rootReducer;