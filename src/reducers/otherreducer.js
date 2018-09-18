import { ACTION_TYPES } from '../actions/myactions';

const initialState = {
  ishidden: true
};

const getDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_DETAILS:
      return Object.assign({}, state, { ishidden: action.payload });
    default:
      return state;
  }
}

export default getDetailsReducer;