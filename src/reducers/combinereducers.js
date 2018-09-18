import { combineReducers } from 'redux';
import { getPhonesReducer } from 'myreducer';

const rootReducer = combineReducers({
  getphonesreducer: getPhonesReducer
});

export default rootReducer;