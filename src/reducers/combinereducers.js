import { combineReducers } from 'redux';
import getPhonesReducer from './myreducer';
import getDetailsReducer from './otherreducer';

const rootReducer = combineReducers({
  getPhonesReducer,
  getDetailsReducer
});

export default rootReducer;