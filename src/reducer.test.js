import {
  FETCH_ID_REQUEST,
  FETCH_ID_FAILURE,
  FETCH_ID_SUCCESS,
} from './action';
import reducer from './reducer';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });
  it('should handle FETCH_ID_REQUEST', () => {
    expect(
      reducer({}, {
        type: FETCH_ID_REQUEST,
        id: 1,
      })
    ).toEqual({
      loading: true,
    });
  });
  it('should handle FETCH_ID_FAILURE', () => {
    const error = new Error('failure to fetch');
    expect(
      reducer({}, {
        type: FETCH_ID_FAILURE,
        error,
      })
    ).toEqual({
      loading: false,
      error,
    });
  });
  it('should handle FETCH_ID_SUCCESS', () => {
    const response = { id: 1 };
    expect(
      reducer({}, {
        type: FETCH_ID_SUCCESS,
        response,
      })
    ).toEqual({
      loading: false,
      response,
    });
  });
});
