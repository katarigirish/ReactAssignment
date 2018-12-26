export const FETCH_ID_REQUEST = 'FETCH_ID_REQUEST';
export const FETCH_ID_FAILURE = 'FETCH_ID_FAILURE';
export const FETCH_ID_SUCCESS = 'FETCH_ID_SUCCESS';

export function requestID(id) {
  return {
    type: FETCH_ID_REQUEST,
    id,
  };
}
export function failureID(id, error) {
  return {
    type: FETCH_ID_FAILURE,
    id,
    error,
  };
}
export function successID(id, response) {
  return {
    type: FETCH_ID_SUCCESS,
    id,
    response,
  };
}

export default function fetchID(id) {
  return dispatch => {
    dispatch(requestID(id));
    return fetch(`https://reqres.in/api/users/${id}`)
      .then(
        response => response.json(),
        error => dispatch(failureID(id, error))
      )
      .then(json => dispatch(successID(id, json.data)));
  };
}
