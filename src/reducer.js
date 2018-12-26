import {
  FETCH_ID_REQUEST,
  FETCH_ID_FAILURE,
  FETCH_ID_SUCCESS,
} from './action';

export default (state = {}, { type, error, response }) => {
  switch (type) {
    case FETCH_ID_REQUEST:
      return { loading: true };
    case FETCH_ID_FAILURE:
      return { loading: false, error };
    case FETCH_ID_SUCCESS:
      return { loading: false, response };
    default:
      return state;
  }
}
