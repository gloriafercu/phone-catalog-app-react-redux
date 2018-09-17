import { ACTION_TYPES } from '../actions/myactions';

const initialState = {
  phones: []
}

export function getPhonesReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.SHOW_PHONES: {
      return {
        ...state
      }
    }
    default: {
      return state;
    }
  }
}
