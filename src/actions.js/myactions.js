import axios from 'axios';

export const ACTION_TYPES = {
  SHOW_PHONES: 'SHOW_PHONES'
}

export function getPhones() {
  return (dispatch) => {
    axios.get('http://localhost:3000/api/phones')
      .then((results) =>
        dispatch({ type: ACTION_TYPES.SHOW_PHONES, payload: results.data })
      );
  }
}