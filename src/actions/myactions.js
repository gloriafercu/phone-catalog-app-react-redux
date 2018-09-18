import axios from 'axios';

export const ACTION_TYPES = {
  GET_PHONES: 'GET_PHONES',
  GET_DETAILS: 'GET_DETAILS'
}

export const getPhones = () => dispatch => {
  axios.get('http://localhost:3000/api/phones')
    .then((results) => results.data.phones)
    .then(data => {
      dispatch({
        type: ACTION_TYPES.GET_PHONES,
        payload: data
      })
    });
}

export function getDetailPhones() {
  return (dispatch) => {
    const selectedPhone = e.currentTarget.querySelector(".phone__detail").classList.toggle('hidden');
    dispatch({
      type: ACTION_TYPES.GET_DETAILS,
      payload: selectedPhone
    });
  };
};