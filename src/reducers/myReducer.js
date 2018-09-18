import { ACTION_TYPES } from '../actions/myactions';

const initialState = {
  phoneslist: [],
  loading: true
}

const getPhonesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_PHONES:
      console.log('state reducer', state);
      return Object.assign({}, state, {
        phoneslist: action.payload,
        loading: !state.loading
      });
    default:
      return state;
  }
}

export default getPhonesReducer;

