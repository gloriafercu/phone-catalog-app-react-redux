export const ACTION_TYPES = {
  SHOW_PHONES: 'SHOW_PHONES'
}

function getPhones() {
  return {
    type: ACTION_TYPES.SHOW_PHONES,
    payload: phones
  }

}