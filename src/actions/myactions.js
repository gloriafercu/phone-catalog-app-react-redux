import axios from 'axios';

export const ACTION_TYPES = {
  GET_PHONES: 'GET_PHONES'
}

export function getPhones() {
  return (dispatch) => {
    axios.get('http://localhost:3000/api/phones')
      .then((results) => results.data.phones)
      .then(data => {
        dispatch({
          type: ACTION_TYPES.GET_PHONES,
          payload: data
        })
        console.log('Datos fetch', data);
      });
  }
}